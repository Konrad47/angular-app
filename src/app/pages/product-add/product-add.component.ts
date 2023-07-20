import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  constructor(private productService: ProductService) {}

  addProduct(product: Product) {
    this.productService
      .addProduct(product)
      .subscribe(() => console.log(product));
  }
}
