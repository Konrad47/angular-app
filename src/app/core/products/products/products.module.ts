import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductTableComponent } from 'src/app/core/products/shared/product-table/product-table.component';

@NgModule({
  declarations: [ProductsComponent, ProductTableComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
