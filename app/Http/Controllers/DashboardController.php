<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use DaveJamesMiller\Breadcrumbs\Facades\Breadcrumbs;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return Inertia::render('Pages/Dashboard/Index',[
            'breadcrumbs' => Breadcrumbs::generate(),
        ]);
    }
}
