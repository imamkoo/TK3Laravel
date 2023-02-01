<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Barang::all();
        $Barangs = Barang::all();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        return Barang::create($request->all());
        // $request->validate([
        //     'nama_barang' => 'required',
        //     'deskripsi' => 'required',
        //     'jenis_barang' => 'required',
        //     'stock_barang' => 'required',
        //     'harga_jual' => 'required',
        //     'harga_beli' => 'required',
        //     'gambar_barang' => 'required|mimes:jpg,png,jpeg,gif,svg',
        // ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //File Upload Function
    public function upload(Request $request)
    {

        //check file
        if ($request->hasFile('gambar_barang')) {
            $file      = $request->file('gambar_barang');
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $Barangs   = date('His') . '-' . $filename;
            //move image to public/img folder
            $file->move(public_path('img'), $Barangs);
            return response()->json(["message" => "Image Uploaded Succesfully"]);
        } else {
            return response()->json(["message" => "Select image first."]);
        }
    }

    public function show($id)
    {
        return Barang::find($id);
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

        if (Barang::where('id', $id)->exists()) {
            $barang = Barang::find($id);
            $barang->nama_barang = $request->nama_barang;
            $barang->deskripsi = $request->deskripsi;
            $barang->jenis_barang = $request->jenis_barang;
            $barang->stock_barang = $request->stock_barang;
            $barang->harga_beli = $request->harga_beli;
            $barang->harga_jual = $request->harga_jual;
            $barang->gambar_barang = $request->gambar_barang;

            $barang->save();
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

        if (Barang::where('id', $id)->exists()) {
            $barang = Barang::find($id);
            $barang->delete();

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