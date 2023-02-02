import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css'],
})
export class EditStaffComponent implements OnInit {
  stafId: any;
  staf: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stafService: StaffService
  ) {}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.stafId = Number(routeParams.get('barangId'));
    // console.log(this.barangId);
    this.stafService.find(this.stafId).subscribe((data: any) => {
      this.staf = data;
      // console.log(this.barang);
    });
  }

  update(
    nama: string,
    email: string,
    TTL: string,
    jenisKelamin: string,
    alamat: string,
    KTP: number,
    role: string
  ) {
    this.stafService.update(this.stafId, this.staf).subscribe((res) => {
      this.router.navigateByUrl('staf');
    });
  }
}
