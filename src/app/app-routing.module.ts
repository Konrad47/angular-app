import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { PostAddComponent } from './pages/post-add/post-add.component';
import { StartComponent } from './pages/start/start.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'post-add', component: PostAddComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
