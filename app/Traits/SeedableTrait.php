<?php

namespace App\Traits;

trait Seedable
{
    public function seed($class)
    {
        if (!class_exists($class)) {
            require_once $this->seedersPath.$class.'.php';
        }
        // $this->call($class);
        \Artisan::call('db:seed', array('--class' => $class, '--force' => true));
        // with(new $class())->run();
    }
}