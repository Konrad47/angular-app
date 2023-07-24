import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
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
  {
    path: 'products-add',
    loadChildren: () =>
      import('./pages/product-add/product-add.module').then(
        (m) => m.ProductAddModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'posts/:id',
    loadChildren: () =>
      import('./pages/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'post-add',
    loadChildren: () =>
      import('./pages/post-add/post-add.module').then((m) => m.PostAddModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
