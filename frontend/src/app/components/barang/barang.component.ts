import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css'],
})
export class BarangComponent implements OnInit {
  barangs: any;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showBarang();
  }

  showBarang() {
    this.barangs = this.dashboardService.listBarang().subscribe((barang) => {
      this.barangs = barang;
      console.log(this.barangs);
    });
  }

  deleteBarang(id: any) {
    this.dashboardService.deleteBarang(id).subscribe((res) => {
      this.barangs = this.barangs.filter((a: any) => a.id == id);
    });
    this.router.navigateByUrl('/dashboard');
  }
}
