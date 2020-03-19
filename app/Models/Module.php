<?php

namespace App\Models;

use Webpatser\Uuid\Uuid;
use App\Models\Permission;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    public $incrementing = false;

    protected $keyType = 'string';

    protected $parent = 'parent_id';

    protected $fillable = [
        'installed',
    ];

    protected $casts = [
        'id' => 'string',
        'parent_id' => 'string',
        'name' => 'string',
        'slug' => 'string',
        'icon' => 'string',
        'header' => 'integer',
        'order' => 'integer',
        'core' => 'boolean',
        'installed' => 'boolean',
    ];

    protected $appends = [
        'permissions',
    ];

    public static function boot() {
        parent::boot();
        
        self::creating(function ($model) {
            $model->id = Uuid::generate()->string;
        });
    }

    public function getPermissionsAttribute()
    {
        if($this->parent_id){
            return Permission::where('name','LIKE','%-'.$this->parentNode->slug.'.'.$this->slug)->pluck('name')->toArray();
        }
    }

    public function children()
    {
        return $this->hasMany(Module::class, 'parent_id');
    }

    public function parentNode()
    {
        return $this->belongsTo(Module::class, 'parent_id');
    }

    public function scopeParent($query)
    {
        return $query->where('parent_id',null);
    }

    public function scopeInstalled($query)
    {
        return $query->where('installed', true);
    }

    public function isInstalled()
    {
        return $this->installed;
    }
}
