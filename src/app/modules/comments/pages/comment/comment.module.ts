import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { CommentEditFormComponent } from '../../components/comment-edit-form/comment-edit-form.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CommentComponent, CommentEditFormComponent],
  imports: [CommonModule, CommentRoutingModule, NgbModule, FormsModule],
})
export class CommentModule {}
