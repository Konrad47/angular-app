import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.css'],
})
export class ProductEditFormComponent {
  @Output() onEditProduct: EventEmitter<Product> = new EventEmitter();
  @Input() product!: Product;
  title: string = '';
  description: string = '';

  onSubmit() {}
}
