import { Component } from '@angular/core';
import { Product } from 'src/app/core/products/shared/product.model';
import { ProductService } from 'src/app/core/products/shared/product.service';
import { SingleTon } from 'src/app/shared/singleton.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe(
        (products) => (
          console.log(products), (this.products = products.products)
        )
      );

    SingleTon.getInstance().getData();
    SingleTon.getInstance().setData('Hi from products');
    SingleTon.getInstance().getData();
  }

  deleteProduct(id: string) {
    this.productService
      .deleteProduct(id)
      .subscribe(
        () =>
          (this.products = this.products.filter((pr) => pr.id !== parseInt(id)))
      );
  }
}
