import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAddRoutingModule } from './post-add-routing.module';
import { PostAddComponent } from './post-add.component';
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostAddComponent, PostFormComponent],
  imports: [CommonModule, PostAddRoutingModule, NgbModule, FormsModule],
})
export class PostAddModule {}
