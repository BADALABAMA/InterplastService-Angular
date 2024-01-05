import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductController } from '../../services/product-controller.service';
import { ProductSearchService } from '../../services/product-search.service';
import { ProductService } from '../../services/product.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { Product } from 'src/app/schema/Product/Product';

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
  foundProducts: Product[] = [];
  spinnerType: string = 'ball-fussion';

  constructor(
    private productController: ProductController,
    private productSearchService: ProductSearchService,
    private productService: ProductService,
    private authorizationService: AuthorizationService,
    private spinnerService: NgxSpinnerService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  showSpinner() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }
  navigate() {
    this.showSpinner();
    setTimeout(() => {
      this.router.navigate(['/authorization']);
    }, 1000);
  }
  getSearch() {
    this.productService.switchToSearchMode();
    this.foundProducts = this.productController.search(this.search);
    if (this.foundProducts.length !== 0) {
      this.productSearchService.setFoundProducts(this.foundProducts);
      this.search = '';
    } else {
      this.productController.getAll().subscribe(
        (allProducts) => {
          this.productService.setProducts(allProducts);
        },
        (error) => {
          console.error('Error during getting all products:', error);
        }
      );
    }
  }
  // method for admin panel
  // addProduct() {
  //   this.productService.switchToAddMode();
  //   this.productController.add(
  //     'product12',
  //     true,
  //     'description12',
  //     1000,
  //     10,
  //     'man12',
  //     'assets/image.png'
  //   );
  // }

  showAdminPanelBtn() {
    this.isHidden = false;
  }
}
