<?php

namespace App\Providers;

use Carbon\Carbon;
use Inertia\Inertia;
use League\Glide\Server;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Resources\Json\Resource;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerInertia();
        $this->registerGlide();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        Carbon::setLocale('es');
        setlocale(LC_ALL,"es_ES@euro","es_ES","esp");
        
        Resource::withoutWrapping();
    }

    public function registerInertia()
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'full_name' => Auth::user()->full_name,
                        'name' => Auth::user()->name,
                        'last_name' => Auth::user()->last_name,
                        'email' => Auth::user()->email,
                        'avatar' => Auth::user()->avatar,
                        'template' => Auth::user()->template,
                        'menu' => Auth::user()->userMenu(),
                    ] : null,
                ];
            },
            'filters' => function () {
                return count(request()->all()) > 0 ? request()->all() : (Object)[];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                    'info' => Session::get('info'),
                    'warning' => Session::get('warning'),
                    'resent' => Session::get('resent'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
        ]);
    }

    protected function registerGlide()
    {
        $this->app->bind(Server::class, function ($app) {
            return Server::create([
                'source' => Storage::getDriver(),
                'cache' => Storage::getDriver(),
                'cache_folder' => '.glide-cache',
                'base_url' => 'img',
            ]);
        });
    }
    
}
