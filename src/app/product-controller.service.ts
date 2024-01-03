import { Injectable } from '@angular/core';
import { Product } from 'src/schema/Product/Product';
import { ProductService } from './product.service';
import { getProducts } from 'src/utils/getProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductController {
  constructor(private productService: ProductService) {
    this.init();
  }

  private init() {
    this.productService.setProducts(getProducts());
  }

  getAll() {
    return this.productService.products$;
  }

  update(
    product: Product,
    title: string,
    isAvailable: boolean,
    description: string,
    price: number,
    quantity: number,
    manufacturer: string,
    imageURL: string
  ) {
    const updatedProduct = new Product(
      product.getID(),
      title,
      isAvailable,
      description,
      price,
      quantity,
      manufacturer,
      imageURL
    );
    this.productService.updateProduct(updatedProduct);
  }

  delete(product: Product) {
    this.productService.deleteProduct(product);
  }

  add(
    title: string,
    isAvailable: boolean,
    description: string,
    price: number,
    quantity: number,
    manufacturer: string,
    imageURL: string
  ) {
    const newProduct = new Product(
      (this.productService.getProducts().length + 1).toString(),
      title,
      isAvailable,
      description,
      price,
      quantity,
      manufacturer,
      imageURL
    );
    this.productService.addProduct(newProduct);
  }

  search(search: string) {
    return this.productService.search(search);
  }
}
