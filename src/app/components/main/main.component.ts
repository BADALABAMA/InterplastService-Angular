import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isHidden: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  showAuthWindow() {
    this.isHidden = false;
  }
}
