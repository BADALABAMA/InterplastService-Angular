import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: string = '';
  password: string = '';
  nameValue: string = '';
  passwordValue: string = '';
  count: number = 0;
  isCounted: boolean = false;
  message: string = '';

  ngOnInit(): void {}

  setValue() {
    if (this.name.trim() !== '' && this.password.trim() !== '') {
      this.nameValue = this.name;
      this.passwordValue = this.password;
      console.log(this.name);
      console.log(this.password);
    }
  }

  setCounterAdd() {
    this.count++;
    if (this.count === 5) {
      this.isCounted = !this.isCounted;
    }
    if (this.count % 5 === 0) {
      this.setMessage();
    }
  }
  setCounterRemove() {
    if (this.count !== 0) {
      this.count--;
    }
  }

  setMessage() {
    const messages = [
      'you are the boss',
      'you are incredible',
      'someone stop him!',
      'did you gonna stop?',
      'why you are still keep clicking?',
      'stop please!!',
      'you are clicking master',
    ];

    const messageIndex = this.count % messages.length;

    this.message = messages[messageIndex];
  }
}
