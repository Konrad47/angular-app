import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
  title: string = '';
  description: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const product: Product = {
      title: this.title,
      description: this.description,
    };

    if (this.title === '' || this.description === '') {
      alert('Please, fill in a form');
      return;
    }
    this.onAddProduct.emit(product);
    alert('Product added');
    this.router.navigate(['products']);
  }
}
