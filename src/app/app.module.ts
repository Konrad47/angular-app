import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartsComponent } from './pages/carts/carts.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartsComponent,
    MenuComponent,
    ButtonsComponent,
    ProductTableComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
