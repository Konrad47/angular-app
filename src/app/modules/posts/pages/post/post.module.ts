import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostEditFormComponent } from '../../components/post-edit-form/post-edit-form.component';

@NgModule({
  declarations: [PostComponent, PostEditFormComponent],
  imports: [CommonModule, PostRoutingModule, NgbModule, FormsModule],
})
export class PostModule {}
