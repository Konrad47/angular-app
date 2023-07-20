import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.css'],
})
export class ProductEditFormComponent {
  @Output() onEditProduct: EventEmitter<Product> = new EventEmitter();
  @Input() product!: Product;

  constructor(private router: Router) {}

  onSubmit() {
    const edtProduct: Product = {
      title: this.product.title,
      description: this.product.description,
    };
    if (this.product.title === '' || this.product.description === '') {
      alert('Please, fill in a form');
      return;
    }

    this.onEditProduct.emit(edtProduct);
    alert('Product edited');
    // this.router.navigate(['products']);
  }
}
