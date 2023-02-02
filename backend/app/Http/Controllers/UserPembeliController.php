<?php

namespace App\Http\Controllers;

use App\Models\UserPembeli;
use Illuminate\Http\Request;

class UserPembeliController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserPembeli::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return UserPembeli::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return UserPembeli::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (UserPembeli::where('id', $id)->exists()) {
            $pembeli = UserPembeli::find($id);
            $pembeli->nama = $request->nama;
            $pembeli->TTL = $request->TTL;
            $pembeli->jenis_kelamin = $request->jenis_kelamin;
            $pembeli->alamat = $request->alamat;
            $pembeli->KTP = $request->KTP;
            $pembeli->role = $request->role;

            $pembeli->save();
            return response()->json([
                "message" => "Update Successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "Not Found"
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (UserPembeli::where('id', $id)->exists()) {
            $pembeli = UserPembeli::find($id);
            $pembeli->delete();

            return response()->json([
                "message" => "Delete Successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "Not Found"
            ], 404);
        }
    }
}