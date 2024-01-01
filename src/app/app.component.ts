import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showBtn: boolean = false;

  toggleComponents() {
    this.showBtn = !this.showBtn;
    return this.showBtn;
  }
}
