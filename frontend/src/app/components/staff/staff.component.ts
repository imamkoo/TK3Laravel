import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  stafs: any;

  constructor(
    private staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showUser();
  }

  showUser() {
    this.stafs = this.staffService.listUser().subscribe((user) => {
      this.stafs = user;
    });
  }

  deleteStaf(id: any) {
    this.staffService.deleteStaf(id).subscribe((res) => {
      this.stafs = this.stafs.filter((a: any) => a.id == id);
    });
    this.router.navigateByUrl('/staf');
  }
}
