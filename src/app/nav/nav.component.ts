import { Component, OnInit } from '@angular/core';
import { ProductController } from '../product-controller.service';
import { ProductSearchService } from '../product-search.service';
import { ProductService } from '../product.service';
import { Product } from 'src/schema/Product/Product';

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

  constructor(
    private productController: ProductController,
    private productSearchService: ProductSearchService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {}

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
