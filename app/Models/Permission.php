<?php

namespace App\Models;

use Webpatser\Uuid\Uuid;

class Permission extends \Spatie\Permission\Models\Permission
{
    public $incrementing = false;

    protected $keyType = 'string';
    
    protected $fillable = [
        'name',
        'guard_name',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];
    
    protected $casts = [
        'id' => 'string',
        'name' => 'string',
        'guard_name' => 'string',
    ];

    public static function boot() {
        parent::boot();
        
        self::creating(function ($model) {
            $model->id = Uuid::generate()->string;
        });
    }

}
