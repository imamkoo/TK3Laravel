import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  pembeliId: any;
  pembeli: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.pembeliId = Number(routeParams.get('barangId'));
    // console.log(this.barangId);
    this.userService.find(this.pembeliId).subscribe((data: any) => {
      this.pembeli = data;
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
    this.userService.update(this.pembeliId, this.pembeli).subscribe((res) => {
      this.router.navigateByUrl('user');
    });
  }
}
