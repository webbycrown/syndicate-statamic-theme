<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\Entry;
use Carbon\Carbon;
use Statamic\Facades\Form;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{   
    /**
     * Handle blog search via AJAX request.
     */
    public function search(Request $request)
    {   
        $query = trim((string) $request->get('q', ''));

        if ($query === '') {
            return response()->json([]);
        }

        $needle = mb_strtolower($query);

        $entries = Entry::query()
            ->where('collection', 'blog')
            ->orderBy('updated_at', 'desc')
            ->get()
            ->filter(function ($entry) use ($needle) {
                $haystack = mb_strtolower(implode(' ', [
                    (string) $entry->get('title'),
                    (string) $entry->get('short_description'),
                    (string) $entry->slug(),
                    $this->plainText($entry->get('content')),
                    $this->termsText($entry->get('category')),
                    $this->termsText($entry->get('tag')),
                ]));

                return str_contains($haystack, $needle);
            })
            ->take(24)
            ->map(function ($entry) {
                $image = $entry->get('image') ?: $entry->get('featured_image');
                $urls = collect(is_array($image) ? $image : ($image ? [$image] : []))
                    ->map(function ($asset) {
                        return url('/assets/'.ltrim((string) $asset, '/'));
                    })
                    ->values()
                    ->all();

                $updated = $entry->get('updated_at');
                $date = is_numeric($updated)
                    ? Carbon::createFromTimestamp($updated)
                    : Carbon::parse($updated ?: 'now');

                return [
                    'title' => $entry->get('title'),
                    'slug' => $entry->slug(),
                    'url' => $entry->url(),
                    'image' => $urls,
                    'short_description' => $entry->get('short_description'),
                    'updated_at' => $date->format('F d, Y'),
                ];
            })
            ->values();

        return response()->json($entries);
    }

    public function newsLetter( Request $request ){
        $email = $request->input('email', '');

        $validator = Validator::make(['email' => $email], [
            'email' => [
                'required',
                'email',
            ]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Please enter a valid email address.',
            ], 200);
        }

        $form = Form::find('newsletter');

        $existing = $form->submissions()->filter(function ($item) use ($email) {
            return $item->get('email') === $email;
        })->first();

        if ($existing) {
            return response()->json([
                'status'=> false , 
                'message' => "You are already subscribed"
            ], 200);
        }

        $form->makeSubmission()->data([
            'email' => $email,
        ])->save();

        return response()->json([
            'status' => true,
            'message' => 'Thank you for subscribing!',
        ]);
    }

    private function termsText($value): string
    {
        if (is_array($value)) {
            return implode(' ', $value);
        }

        return (string) $value;
    }

    private function plainText($content): string
    {
        if (is_string($content)) {
            return trim(strip_tags($content));
        }

        if (! is_array($content)) {
            return '';
        }

        $parts = [];
        $walk = function ($node) use (&$walk, &$parts) {
            if (! is_array($node)) {
                return;
            }

            if (isset($node['text']) && is_string($node['text'])) {
                $parts[] = $node['text'];
            }

            if (isset($node['blockqoute']) && is_string($node['blockqoute'])) {
                $parts[] = $node['blockqoute'];
            }

            foreach ($node as $value) {
                if (is_array($value)) {
                    $walk($value);
                }
            }
        };

        $walk($content);

        return implode(' ', $parts);
    }
}
