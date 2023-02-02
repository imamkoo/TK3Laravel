import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showUser();
  }

  showUser() {
    this.users = this.userService.listUser().subscribe((user) => {
      this.users = user;
    });
  }

  deletePembeli(id: any) {
    this.userService.deletePembeli(id).subscribe((res) => {
      this.users = this.users.filter((a: any) => a.id == id);
    });
    this.router.navigateByUrl('/user');
  }
}
