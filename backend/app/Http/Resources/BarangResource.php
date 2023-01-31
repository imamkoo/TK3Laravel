<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BarangResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nama_barang' => $this->nama_barang,
            'deskripsi' => $this->deskripsi,
            'jenis_barang' => $this->jenis_barang,
            'stock_barang' => $this->stock_barang,
            'harga_beli' => $this->harga_beli,
            'harga_jual' => $this->harga_jual,
            'gambar_barang' => $this->gambar_barang,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}