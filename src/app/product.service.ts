import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/schema/Product/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();
  searchMode: boolean = false;

  constructor() {}

  getProducts(): Product[] {
    return this.productsSubject.getValue();
  }

  setProducts(products: Product[]): void {
    this.productsSubject.next(products);
  }

  addProduct(product: Product): void {
    const currentProducts = this.productsSubject.getValue();
    const updatedProducts = [...currentProducts, product];
    this.productsSubject.next(updatedProducts);
  }

  updateProduct(updatedProduct: Product): void {
    const currentProducts = this.productsSubject.getValue();
    const updatedProducts = currentProducts.map((product) =>
      product.getID() === updatedProduct.getID() ? updatedProduct : product
    );
    this.productsSubject.next(updatedProducts);
  }

  deleteProduct(product: Product): void {
    const currentProducts = this.productsSubject.getValue();
    const updatedProducts = currentProducts.filter(
      (existingProduct) => existingProduct.getID() !== product.getID()
    );
    this.productsSubject.next(updatedProducts);
  }

  search(search: string): Product[] {
    const currentProducts = this.productsSubject.getValue();
    return currentProducts.filter((product) =>
      product.getTitle().toLowerCase().includes(search.toLowerCase())
    );
  }

  switchToSearchMode() {
    this.searchMode = true;
  }
  switchToAddMode() {
    this.searchMode = false;
  }
}
