<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('id', 36)->primary();
            $table->string('name');
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('phone',15)->nullable();
            $table->string('cell_phone',15)->nullable();
            $table->string('password');
            $table->boolean('status')->default(true);
            $table->boolean('admin')->default(false);
            $table->boolean('archived')->default(false);
            $table->smallInteger('fails')->default(0);
            $table->timestamp('email_verified_at')->nullable();
            $table->text('avatar')->nullable();
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
