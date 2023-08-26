import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/pages/products/products.module').then(
        (m) => m.ProductsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./modules/products/pages/product/product.module').then(
        (m) => m.ProductModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'products-add',
    loadChildren: () =>
      import('./modules/products/pages/product-add/product-add.module').then(
        (m) => m.ProductAddModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/pages/posts/posts.module').then(
        (m) => m.PostsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'posts/:id',
    loadChildren: () =>
      import('./modules/posts/pages/post/post.module').then(
        (m) => m.PostModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'post-add',
    loadChildren: () =>
      import('./modules/posts/pages/post-add/post-add.module').then(
        (m) => m.PostAddModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/start/pages/start/start.module').then(
        (m) => m.StartModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/pages/login/login.module').then(
        (m) => m.LoginModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./modules/todos/pages/todos/todos.module').then(
        (m) => m.TodosModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'todos/:id',
    loadChildren: () =>
      import('./modules/todos/pages/todo/todo.module').then(
        (m) => m.TodoModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'todo-add',
    loadChildren: () =>
      import('./modules/todos/pages/todo-add/todo-add.module').then(
        (m) => m.TodoAddModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
