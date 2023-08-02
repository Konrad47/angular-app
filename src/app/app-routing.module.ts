import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/pages/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./modules/products/pages/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'products-add',
    loadChildren: () =>
      import('./modules/products/pages/product-add/product-add.module').then(
        (m) => m.ProductAddModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/pages/posts/posts.module').then(
        (m) => m.PostsModule
      ),
  },
  {
    path: 'posts/:id',
    loadChildren: () =>
      import('./modules/posts/pages/post/post.module').then(
        (m) => m.PostModule
      ),
  },
  {
    path: 'post-add',
    loadChildren: () =>
      import('./modules/posts/pages/post-add/post-add.module').then(
        (m) => m.PostAddModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/start/pages/start/start.module').then(
        (m) => m.StartModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./modules/todos/pages/todos/todos.module').then(
        (m) => m.TodosModule
      ),
  },
  {
    path: 'todos/:id',
    loadChildren: () =>
      import('./modules/todos/pages/todo/todo.module').then(
        (m) => m.TodoModule
      ),
  },
  {
    path: 'todo-add',
    loadChildren: () =>
      import('./modules/todos/pages/todo-add/todo-add.module').then(
        (m) => m.TodoAddModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
