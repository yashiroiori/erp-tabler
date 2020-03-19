<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    public function showLinkRequestForm()
    {
        return Inertia::render('Pages/Auth/ForgotPassword');
    }

    public function sendResetLinkResponse()
    {
        return Redirect::back()->with('success', 'El sistema de recuperación de contraseña ha enviado a tu correo electrónico la url para resetear la contraseña, revisa la bandeja de SPAM si no aperece en la bandeja principal');
    }

}
