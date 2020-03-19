<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->string('id', 36)->primary();
            $table->string('parent_id',36)->nullable();
            $table->string('name',50);
            $table->string('slug',50);
            $table->string('icon',30);
            $table->boolean('header')->default(false);
            $table->smallInteger('order')->default(1);
            $table->boolean('core')->default(false);
            $table->boolean('installed')->default(false);
            $table->text('description')->nullable();
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
        Schema::dropIfExists('modules');
    }
}
