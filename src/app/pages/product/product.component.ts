import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productId!: string;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') as string;
    this.productService
      .getProduct(this.productId)
      .subscribe((product) => (this.product = product));
  }

  onEdit(product: Product) {
    console.log(product);
    this.productService
      .editProduct(product, this.productId)
      .subscribe(() => (this.product = product));
  }
}
