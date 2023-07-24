import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostTableComponent } from 'src/app/core/posts/shared/post-table/post-table.component';

@NgModule({
  declarations: [PostsComponent, PostTableComponent],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
