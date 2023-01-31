import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ServiceService } from 'src/app/Services/service.service';
import { TokenServiceService } from 'src/app/Services/token-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenServiceService,
    private Service: ServiceService
  ) {}

  ngOnInit(): void {}
}
