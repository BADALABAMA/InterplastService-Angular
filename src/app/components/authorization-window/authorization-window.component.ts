import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-authorization-window',
  templateUrl: './authorization-window.component.html',
  styleUrls: ['./authorization-window.component.css'],
})
export class AuthorizationWindowComponent implements OnInit {
  emailPlaceholder: string = 'email';
  passwordPlaceholder: string = 'password';
  email: string = '';
  password: string = '';
  btnTitle: string = 'Login';
  isDisplay: boolean = false;
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}
  login() {
    console.log(this.email, this.password);
    this.email = '';
    this.password = '';
    this.authorizationService.toggleAuthorizationWindow();
    this.router.navigate(['/']);
  }
  ngOnInit(): void {}
}
