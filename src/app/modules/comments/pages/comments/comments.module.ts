import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { CommentTableComponent } from '../../components/comment-table/comment-table.component';

@NgModule({
  declarations: [CommentsComponent, CommentTableComponent],
  imports: [CommonModule, CommentsRoutingModule],
})
export class CommentsModule {}
