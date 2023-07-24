import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./core/products/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./core/products/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'products-add',
    loadChildren: () =>
      import('./core/products/product-add/product-add.module').then(
        (m) => m.ProductAddModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./core/posts/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'posts/:id',
    loadChildren: () =>
      import('./core/posts/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'post-add',
    loadChildren: () =>
      import('./core/posts/post-add/post-add.module').then(
        (m) => m.PostAddModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./core/start/start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/login/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
