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
     * Filters blog entries by title, orders by update date, limits results, and returns JSON.
     */

    public function search(Request $request)
    {   
        // Get the search keyword from the request
        $query = $request->get('q');

        // Query blog entries from the 'blog' collection matching the title
        $entries = Entry::query()
            ->where('collection', 'blog')
            ->where('title', 'like', "%$query%")
            ->orderBy('updated_at', 'desc') // Sort results by last updated
            ->limit(6) // Limit the number of results to 2
            ->get()
            ->map(function ($entry) {
                $image = $entry->get('image'); // Get image field (can be array of asset IDs)
                return [
                    'title' => $entry->get('title'),
                    'slug' => $entry->slug(),
                    'url' => $entry->url(),
                    // Convert asset paths to public URLs
                    'image' =>  collect($image)->map(function ($asset) {
                        return url('assets/'.$asset);
                    })->toArray(),
                    // Format the updated date

                    'updated_at' => Carbon::createFromTimestamp($entry->get('updated_at'))->format('F d, Y'),
                ];
            });

        return response()->json($entries);  // Return as JSON response
    }


    /**
     * Handle newsletter subscription.
     * Validates email, checks for duplicates, and saves new submissions.
     */
    public function newsLetter( Request $request ){
        // Get email from request, default to empty string
        $email = $request->get('email') ? $request->get('email') : '';

        // Validate email format
        $validator = Validator::make(['email' => $email], [
            'email' => [
                'required',
                'email',
            ]
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'email is required',
            ], 200);
        }

        // Load the 'newsletter' form
        $form = Form::find('newsletter');

        // Check if the email has already been submitted
        $existing = $form->submissions()->filter(function ($item) use ($email) {
            return $item->get('email') === $email;
        })->first();

        // If email already exists, return message    
        if ($existing) {
            return response()->json([
                'status'=> false , 
                'message' => "You are already subscribed"
            ], 200);
        }

        // Save new form submission
        $form->makeSubmission()->data([
            'email' => $email,
        ])->save();

        // Return success response
        return response()->json([
            'status' => true,
            'message' => 'Thank you for subscribing!',
        ]);

    }
}
