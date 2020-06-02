<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Common/Welcome');
});

Route::prefix('admin')->middleware('web')->group(function() {
    Route::middleware('auth','verified')->group(function() {
        Route::get('/', 'DashboardController')->name('admin.dashboard');
        Route::get('dashboard', function(){
            return redirect()->route('admin.dashboard');
        });
    });
    /**
     * Login Route(s)
     */
    // ->middleware('verified')
    Route::get('login', 'Auth\\LoginController@showLoginForm')->name('admin.login');
    Route::post('login', 'Auth\\LoginController@login')->name('admin.login.post');
    Route::post('logout', 'Auth\\LoginController@logout')->name('admin.logout');
    /**
     * Register Route(s)
     */
    // Route::get('register', 'Auth\\RegisterController@showRegistrationForm')->name('admin.register');
    // Route::post('register', 'Auth\\RegisterController@register');
    /**
     * Password Reset Route(S)
     */
    Route::get('password/reset', 'Auth\\ForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('password/email', 'Auth\\ForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
    Route::get('password/reset/{token}', 'Auth\\ResetPasswordController@showResetForm')->name('admin.password.reset');
    Route::post('password/reset', 'Auth\\ResetPasswordController@reset')->name('admin.password.update');
    /**
     * Email Verification Route(s)
     */
    Route::get('email/verify', 'Auth\\VerificationController@show')->name('admin.verification.notice');
    Route::get('email/verify/{id}', 'Auth\\VerificationController@verify')->name('admin.verification.verify');
    Route::post('email/resend', 'Auth\\VerificationController@resend')->name('admin.verification.resend');
});
