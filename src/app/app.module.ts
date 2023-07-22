import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductEditFormComponent } from './components/product-edit-form/product-edit-form.component';
import { PostsComponent } from './pages/posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/post/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/post/post.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostTableComponent } from './components/post-table/post-table.component';
import { PostComponent } from './pages/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostEditFormComponent } from './components/post-edit-form/post-edit-form.component';
import { PostAddComponent } from './pages/post-add/post-add.component';
import { StartComponent } from './pages/start/start.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthEffects } from './store/authorization/auth.effects';
import { authReducers } from './store/authorization/auth.reducer';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MenuComponent,
    ButtonsComponent,
    ProductTableComponent,
    ProductComponent,
    ProductAddComponent,
    ProductFormComponent,
    ProductEditFormComponent,
    PostsComponent,
    PostTableComponent,
    PostComponent,
    PostFormComponent,
    PostEditFormComponent,
    PostAddComponent,
    StartComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot({ posts: reducers, auth: authReducers }),
    EffectsModule.forRoot([PostsEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
