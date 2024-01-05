import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  spinnerType: string = 'ball-fussion';

  constructor(
    private authorizationService: AuthorizationService,
    private spinnerService: NgxSpinnerService,
    private router: Router
  ) {}

  showSpinner() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }
  login() {
    this.showSpinner();

    console.log(this.email, this.password);
    this.email = '';
    this.password = '';
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
  ngOnInit(): void {}
}
