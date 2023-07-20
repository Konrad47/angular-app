import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
  title!: string;
  description!: string;

  onSubmit() {
    const product: Product = {
      title: this.title,
      description: this.description,
    };

    this.onAddProduct.emit(product);
  }
}
