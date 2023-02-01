import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-edit-barang',
  templateUrl: './edit-barang.component.html',
  styleUrls: ['./edit-barang.component.css'],
})
export class EditBarangComponent implements OnInit {
  barangId: any;
  barang: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) {}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.barangId = Number(routeParams.get('barangId'));
    // console.log(this.barangId);
    this.dashboardService.find(this.barangId).subscribe((data: any) => {
      this.barang = data;
      // console.log(this.barang);
    });
  }

  update(
    namaBarang: string,
    deskripsiBarang: string,
    jenisBarang: string,
    stockBarang: number,
    hargaBeliBarang: number,
    hargaJualBarang: number
  ) {
    this.dashboardService
      .update(this.barangId, this.barang)
      .subscribe((res) => {
        this.router.navigateByUrl('dashboard');
      });
  }
}
