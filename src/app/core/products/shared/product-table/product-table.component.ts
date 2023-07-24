import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/products/shared/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent {
  @Input() products!: Product[];
  @Output() onDeleteProduct: EventEmitter<string> = new EventEmitter();

  get sortedProducts(): Product[] {
    return this.products.sort((a, b) => a.title.localeCompare(b.title));
  }

  onDelete(id: string) {
    this.onDeleteProduct.emit(id);
  }
}
