<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| These routes handle the blog search and newsletter subscription.
| The controller methods return JSON responses (used typically for AJAX).
*/


// Route to handle AJAX blog search requests
Route::get('/blog-search', [BlogController::class, 'search'])->name('blog.search');

// Route to handle newsletter subscription form submissions
Route::get('/newsLetter', [BlogController::class, 'newsLetter'])->name('newsLetter');
