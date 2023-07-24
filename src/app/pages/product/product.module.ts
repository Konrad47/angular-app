import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductEditFormComponent } from 'src/app/components/product-edit-form/product-edit-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent, ProductEditFormComponent],
  imports: [CommonModule, ProductRoutingModule, NgbModule, FormsModule],
})
export class ProductModule {}
