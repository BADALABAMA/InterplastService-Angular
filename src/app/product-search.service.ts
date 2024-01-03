// product-search.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/schema/Product/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  private foundProductsSubject = new BehaviorSubject<Product[]>([]);
  foundProducts$ = this.foundProductsSubject.asObservable();

  constructor() {}

  setFoundProducts(products: Product[]): void {
    this.foundProductsSubject.next(products);
  }
}
