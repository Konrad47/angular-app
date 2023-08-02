import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAddRoutingModule } from './post-add-routing.module';
import { PostAddComponent } from './post-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from '../../components/post-form/post-form.component';

@NgModule({
  declarations: [PostAddComponent, PostFormComponent],
  imports: [CommonModule, PostAddRoutingModule, NgbModule, FormsModule],
})
export class PostAddModule {}
