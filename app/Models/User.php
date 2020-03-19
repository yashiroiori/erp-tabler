<?php

namespace App\Models;

use Webpatser\Uuid\Uuid;
use App\Traits\UserMenuTrait;
use App\Traits\StatusModelTrait;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use App\Traits\CreatedUpdatedAgoModelTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\VerifyEmailNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\UserSendEmailRecoverNotification;
use Lorisleiva\LaravelSearchString\Concerns\SearchString;

// Events
use App\Events\User\UserCreatedEvent;
use App\Events\User\UserDeletedEvent;
use App\Events\User\UserForceDeleted;
use App\Events\User\UserUpdatedEvent;
use App\Events\User\UserRestoredEvent;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable, SoftDeletes, HasRoles, UserMenuTrait, StatusModelTrait, CreatedUpdatedAgoModelTrait, SearchString;

    public $incrementing = false;

    protected $guard_name = 'web';

    protected $keyType = 'string';
    
    const USER_ADMIN = 'true';

    /**
     * The event map for the model.
     *
     * Allows for object-based events for native Eloquent events.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => UserCreatedEvent::class,
        'updated' => UserUpdatedEvent::class,
        'restored' => UserRestoredEvent::class,
        'deleted' => UserDeletedEvent::class,
        'forceDeleted' => UserForceDeleted::class,
    ];

    protected $fillable = [
        'name',
        'last_name',
        'email',
        'phone',
        'cell_phone',
        'password',
        'status',
        'admin',
        'archived',
        'fails',
        'avatar',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'string',
        'name' => 'string',
        'last_name' => 'string',
        'email' => 'string',
        'phone' => 'string',
        'cell_phone' => 'string',
        'password' => 'string',
        'status' => 'string',
        'admin' => 'boolean',
        'archived' => 'boolean',
        'fails' => 'integer',
        'avatar' => 'string',
        'email_verified_at' => 'datetime',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $withCount = [
        'roles',
    ];

    protected $appends = [
        'full_name',
        'can_edit',
        'is_active',
        'is_deleted',
        'is_archived',
        'status_text',
        'created_ago',
        'updated_ago',
    ];

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

    protected $searchStringColumns = [
        'name' => [
            'key' => 'nombre',
            'searchable' => true,
        ],
        'last_name' => [
            'key' => 'apellido',
            'searchable' => true,
        ],
        'email' => [
            'searchable' => true,
        ],
        'archived' => 'archivado',
        'deleted_at' => 'eliminado',
    ];

    public static function modelData()
    {
        return [
            'titles' => [
                'index' => 'Consulta de Usuarios',
                'create' => 'Nuevo Usuario',
                'edit' => 'Editar Usuario',
            ],
            'icon' => 'fa fa-users',
            'resource' => 'user',
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
                    'field' => 'full_name',
                    'view_action' => true,
                ],
                [
                    'name' => 'Correo electrónico',
                    'field' => 'email',
                ],
                [
                    'name' => 'Celular',
                    'field' => 'cell_phone',
                    'style' => 'width: 120px;text-align:right;',
                ],
                [
                    'name' => 'Roles',
                    'field' => 'roles_count',
                    'style' => 'width: 80px;text-align:right;',
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

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new UserSendEmailRecoverNotification($token));
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmailNotification);
    }

    public function isAdmin()
    {
        return $this->admin == self::USER_ADMIN;
    }

    public function getFullNameAttribute()
    {
        return $this->name.' '.$this->last_name;
    }

    public function getCanEditAttribute()
    {
        return true;
    }

    public function getRoleCountAttribute()
    {
        return $this->getRoleNames()->count();
    }
}
