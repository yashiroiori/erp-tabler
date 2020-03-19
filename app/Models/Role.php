<?php

namespace App\Models;

use Webpatser\Uuid\Uuid;
use App\Traits\StatusModelTrait;
use App\Traits\CreatedUpdatedAgoModelTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Lorisleiva\LaravelSearchString\Concerns\SearchString;

// Events
use App\Events\Role\RoleCreatedEvent;
use App\Events\Role\RoleDeletedEvent;
use App\Events\Role\RoleForceDeleted;
use App\Events\Role\RoleUpdatedEvent;
use App\Events\Role\RoleRestoredEvent;

class Role extends \Spatie\Permission\Models\Role
{
	use SoftDeletes, CreatedUpdatedAgoModelTrait, StatusModelTrait, SearchString;

    public $incrementing = false;

    protected $keyType = 'string';

    protected $guard_name = 'web';

    /**
     * The event map for the model.
     *
     * Allows for object-based events for native Eloquent events.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => RoleCreatedEvent::class,
        'updated' => RoleUpdatedEvent::class,
        'restored' => RoleRestoredEvent::class,
        'deleted' => RoleDeletedEvent::class,
        'forceDeleted' => RoleForceDeleted::class,
    ];
    
	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'avatar',
        'archived',
        'guard_name',
    ];

    protected $casts = [
        'id' => 'string',
        'name' => 'string',
        'avatar' => 'string',
        'archived' => 'boolean',
        'guard_name' => 'string',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $searchStringColumns = [
        'name' => [
            'key' => 'nombre',
            'searchable' => true,
        ],
        'archived' => 'archivado',
        'deleted_at' => 'eliminado',
    ];

    public static function modelData()
    {
        return [
            'titles' => [
                'index' => 'Consulta de Roles',
                'create' => 'Nuevo Rol',
                'edit' => 'Editar Rol',
            ],
            'icon' => 'fa fa-lock',
            'resource' => 'role',
            'actions' => [
                'read',
                'edit',
                'add',
                'delete',
                'archive',
                'restore',
            ],
            'columns_table' => [
                [
                    'name' => 'Nombre',
                    'field' => 'name',
                    'view_action' => true,
                ],
                [
                    'name' => 'Permisos',
                    'field' => 'permission_count',
                    'style' => 'width: 135px;text-align:right;',
                    'number_column' => true,
                    'number_format' => '0',
                ],
                [
                    'name' => 'Usuarios',
                    'field' => 'user_count',
                    'style' => 'width: 135px;text-align:right;',
                    'number_column' => true,
                    'number_format' => '0',
                ],
                [
                    'name' => 'Actualizado',
                    'field' => 'updated_ago',
                    'select_field' => false,
                    'style' => 'width: 130px;text-align:right;',
                ],
                [
                    'name' => 'Estatus',
                    'field' => 'status_text',
                    'view_action' => false,
                    'style' => 'width: 130px;text-align:center;',
                ],
            ],
            'rules' => [
                [
                    'type' => 'text',
                    'id' => 'name',
                    'label' => "Nombre",
                ],
                [
                    'type' => 'select',
                    'id' => 'status',
                    'label' => "Estatus",
                    'choices' => [
                        ['label' => 'Todos', 'value' => 'withTrashed'],
                        ['label' => 'Activos', 'value' => 'active'],
                        ['label' => 'Archivados', 'value' => 'archived'],
                        ['label' => 'Eliminados', 'value' => 'trashed'],
                    ]
                ],
            ],
        ];
    }

    protected $with = [
        
    ];

    protected $appends = [
        'can_edit',
        'is_active',
        'is_deleted',
        'is_archived',
        'status_text',
        'user_count',
        'permission_count',
        'created_ago',
        'updated_ago',
    ];

    public function getCanEditAttribute()
    {
        return true;
    }

    public function getPermissionAttribute()
    {
        return $this->permissions()->pluck('name');
    }

    public function getUserCountAttribute()
    {
        return $this->users()->count();
    }

    public function getPermissionCountAttribute()
    {
        return $this->permissions()->count();
    }

    public static function boot() {
        parent::boot();
        
        self::creating(function ($model) {
            $model->id = Uuid::generate()->string;
            $model->avatar = \Avatar::create(strtoupper($model->name))->toBase64();
            $model->guard_name = 'web';
        });
        self::updating(function ($model) {
            $model->avatar = \Avatar::create(strtoupper($model->name))->toBase64();
        });
    }

}
