<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserPembeli extends Model
{
    use HasFactory;
    protected $table = 'user_pembeli';
    protected $fillable = [
        'nama', 'email', 'TTL', 'jenis_kelamin', 'alamat', 'KTP', 'role'
    ];

    protected $hidden = [
        'password',
    ];
}