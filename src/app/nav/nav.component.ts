import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  inputPlaceholder: string = 'Search';
  searchBtnTitle: string = 'Search';
  loginBtnTitle: string = 'Login';
  adminPanelBtnTitle: string = 'Admin Panel';
  cartBtnTitle: string = 'Cart';
  search: string = '';
  isHidden: boolean = true;

  ngOnInit(): void {}

  getSearch() {
    if (this.search.trim() !== '') {
      console.log(this.search);
      this.search = '';
    }
  }

  showAdminPanelBtn() {
    this.isHidden = false;
  }
}
