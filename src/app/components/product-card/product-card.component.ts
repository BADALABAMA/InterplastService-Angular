import { Component, OnInit } from '@angular/core';
import { ProductSearchService } from 'src/app/services/product-search.service';
import { ProductService } from 'src/app/services/product.service';
import { getProducts } from 'src/app/utils/getProducts';
import { Product } from 'src/app/schema/Product/Product';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  products = getProducts();

  buyBtnTitle = 'Buy';
  productOnPage: number = 8;
  page = 1;
  spinnerType: string = 'ball-fussion';
  foundProducts: Product[] = [];
  products$ = this.productService.products$;

  constructor(
    private spinnerService: NgxSpinnerService,
    private productSearchService: ProductSearchService,
    private productService: ProductService
  ) {}

  showSpinner() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  handlePageChange(event: any) {
    this.showSpinner();
    setTimeout(() => {
      this.page = event;
    }, 1000);
  }
  ngOnInit(): void {
    // Search product

    this.productSearchService.foundProducts$.subscribe((products) => {
      if (this.productService.searchMode) {
        this.foundProducts = products;
        console.log('Found Products:', this.foundProducts);
      }
    });

    // Add NewProduct

    this.productService.products$.subscribe((products) => {
      if (!this.productService.searchMode) {
        this.products = products;
        console.log('Add new product:', this.products);
      }
    });
  }
}
