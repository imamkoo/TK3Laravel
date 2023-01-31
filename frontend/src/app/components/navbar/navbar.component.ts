import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenServiceService } from 'src/app/Services/token-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public loggedIn: any;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenServiceService
  ) {}

  ngOnInit() {
    this.Auth.authStatus.subscribe((value) => (this.loggedIn = value));
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }
}
