<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

## Acerca ERP

Core base para sistema ERP usando modulos/packages para escalar el sistema, funcionas básicas:

- Administración de roles y permisos
- Administración de usuarios
- Flujo completo del sistema de Autenticación de Laravel
    - Login
    - Recuperar contraseña
    - Verificación de correo electrónico
    - Envío de correo electrónico para recuperación de contraseña desde Acl Manager

## FrontEnd

- Usando InertiaJS simulando un SPA [Single Page Application] con Vue da una facilidad para desarrollar componentes y poder compartir datos desde el BackEnd de manera muy simple
- Plantilla tabler open source

Tabler: https://github.com/tabler/tabler
Package: https://inertiajs.com/

## Broadcast

Gracias a Laravel Echo Server cuenta con su propio servidor para emitir los eventos usando Broadcast de Laravel

En la documentación se detallan los datos que se requieren para la configuración

Package: https://github.com/tlaverdure/laravel-echo-server

## Modulos

Modularizar el sistema es muy sencillo, logrando con esto una mejor organización y poder realizar mantenimiento de una manera eficiente y rápida

El objetivo de los módulos es poder tener en cada carpeta la agrupación de Model / Migration / Controller / Request / Notification / Event / Listener / Resources / etc. necesarios para cada módulo y trabaje de manera individual dentro de Laravel

Package: https://github.com/nWidart/laravel-modules

## Packages

- AclManager [pruebas]: el sistema cuenta con el módulo Acl Manager el cual contiene los componentes para Listado / Creacion / Edición / Ver para los modelos Role y User con lo necesario para asignar permisos a los usuarios dentro del sistema, para posteriormente se validen usando Policy para las acciones BREAD [Browse Read Edit Add Delete].

## Componentes Vue

- ResourceIndex: componente principal usado para los métodos index, el cual ayuda para la consulta y acciones BREAD del modelo

- NotificationBroadcast: componente encargado de la escucha a los eventos broadcast

## Instalación

1. git clone https://github.com/yashiroiori/erp-tabler
2. cd erp-tabler
3. composer install && npm install
4. mkdir Modules # carpeta para destino para creación de los módulos
5. npm run dev
6. cp .env.example .env
7. php artisan key:generate
8. Configurar las credenciales para la base de datos dentro de .env
9. php artisan migrate --seed
10. php artisan admin:module-aclmanager:install #agregar los modulos Role, User y los permisos ACL

Abrir la url para acceder al sistema con la url previamente configurada según el entorno de desarrollo utilizado http://dominio.test/admin/

Credenciales por defecto en seeder UsersTableSeeder:
- user: admin@admin.com
- pass: secret

## Instalación laravel-echo-server

1. npm install -g laravel-echo-server
2. Actualizar el dominio de acceso al sistema en la variable: "authHost" dentro del archivo laravel-echo-server.json, localizado en la raís del proyecto
3. laravel-echo-server start

Notas: el sistema inicia pruebas para obtener, reparar las fallas, ampliar la sección readme y desarrollar unos módulos de muestra