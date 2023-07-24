import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAddRoutingModule } from './product-add-routing.module';
import { ProductAddComponent } from './product-add.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductRoutingModule } from '../product/product-routing.module';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';

@NgModule({
  declarations: [ProductAddComponent, ProductFormComponent],
  imports: [CommonModule, ProductRoutingModule, NgbModule, FormsModule],
})
export class ProductAddModule {}
