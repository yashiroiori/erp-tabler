<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            'name' => 'Super',
            'last_name' => 'Admin',
            'password' => bcrypt('secret'),
            'email' => 'admin@admin.com',
            'admin' => true,
            'email_verified_at' => date('Y-m-d H:i:s'),
        ];
        User::firstOrCreate(['email' => $user['email']],$user);
        try{
    	}catch(Exception $e){
            \Log::info($e->getMessage());
    	}
    }
}
