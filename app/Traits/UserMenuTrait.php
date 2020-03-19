<?php

namespace App\Traits;

use App\Models\Module;
use App\Models\Permission;
use Illuminate\Support\Facades\Route;

trait UserMenuTrait
{
    public function getPermissionAttribute() {
        if($this->isAdmin()){
            return Permission::pluck('name')->toArray();
        }
        return $this->getAllPermissions()->pluck('name')->toArray();
    }

    public function getUserMenuAttribute()
    {
        return $this->userMenu();
    }

    public function userMenu()
    {
        $modules = [];
        foreach(Module::parent()->has('children')->orderBy('order')->get() as $module){
            if($module->has('children') && $module->children->count() > 0){
                $add = false;
                $childrens_tmp = [];
                foreach($module->children()->orderBy('order')->get() as $children){
                    if(Route::has($children->slug.'.index') && (auth()->user()->isAdmin() || auth()->user()->hasPermissionTo('browse-'.str_replace('.index','',$children->slug)))){
                        $add = true;
                        $childrens_tmp[] = [
                            'id' => $children->id,
                            'name' => $children->name,
                            'slug' => $children->slug,
                            'icon' => $children->icon,
                            'header' => $children->header,
                            'order' => $children->order,
                        ];
                    }
                }
                if($add){
                    $modules[$module->slug] = [
                        'id' => $module->id,
                        'name' => $module->name,
                        'slug' => $module->slug,
                        'icon' => $module->icon,
                        'header' => $module->header,
                        'order' => $module->order,
                        'children' => $childrens_tmp,
                    ];
                }
            }
        }
        return $modules;
    }
}