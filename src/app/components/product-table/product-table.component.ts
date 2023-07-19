import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent {
  @Input() products!: Product[];

  get sortedProducts(): Product[] {
    return this.products.sort((a, b) => a.title.localeCompare(b.title));
  }
}
