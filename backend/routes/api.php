<?php

use App\Models\Barang;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\BarangResource;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\ChangePasswordController;
use App\Http\Controllers\UserPembeliController;
use App\Http\Resources\UserPembeliResource;
use App\Models\User;

Route::get('/barangs', function () {
    return BarangResource::collection(Barang::all());
});
Route::get('/barang/{id}', function ($id) {
    return new BarangResource(Barang::findOrFail($id));
});

Route::get('/pembeli', function () {
    return UserPembeliResource::collection(User::all());
});
Route::get('/pembeli/{id}', function ($id) {
    return new UserPembeliResource(User::findOrFail($id));
});
Route::get('/staff', function () {
    return UserPembeliResource::collection(User::all());
});
Route::get('/staff/{id}', function ($id) {
    return new UserPembeliResource(User::findOrFail($id));
});

Route::group([

    'middleware' => 'api',

], function () {

    Route::post('login', [AuthController::class, "login"]);
    Route::post('signup', [AuthController::class, "signup"]);
    Route::post('logout', [AuthController::class, "logout"]);

    Route::post('sendPasswordResetLink', [ResetPasswordController::class, "sendEmail"]);
    Route::post('resetPassword', [ChangePasswordController::class, "process"]);

    Route::post('/barangs', [BarangController::class, 'store']);
    Route::put('/barang/{id}', [BarangController::class, 'update']);
    Route::delete('/barang/{id}', [BarangController::class, 'destroy']);
    Route::post('/upload', [BarangController::class, 'upload']);

    Route::post('/pembeli', [UserPembeliController::class, 'store']);
    Route::put('/pembeli/{id}', [UserPembeliController::class, 'update']);
    Route::delete('/pembeli/{id}', [UserPembeliController::class, 'destroy']);

    Route::post('/staff', [UserPembeliController::class, 'store']);
    Route::put('/staff/{id}', [UserPembeliController::class, 'update']);
    Route::delete('/staff/{id}', [UserPembeliController::class, 'destroy']);
});