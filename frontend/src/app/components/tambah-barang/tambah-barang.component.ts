import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-tambah-barang',
  templateUrl: './tambah-barang.component.html',
  styleUrls: ['./tambah-barang.component.css'],
})
export class TambahBarangComponent implements OnInit {
  barangs: any;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  add(
    namaBarang: string,
    deskripsiBarang: string,
    jenisBarang: string,
    stockBarang: number,
    hargaBeliBarang: number,
    hargaJualBarang: number
  ) {
    this.barangs = {
      nama_barang: namaBarang,
      deskripsi: deskripsiBarang,
      jenis_barang: jenisBarang,
      stock_barang: stockBarang,
      harga_beli: hargaBeliBarang,
      harga_jual: hargaJualBarang,
    };
    this.dashboardService.addBarang(this.barangs as any).subscribe((barang) => {
      this.barangs = barang;
    });
    // console.log(this.barangs);
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit(): void {}
}
