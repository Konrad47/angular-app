import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent {
  addPost(post: Post) {
    console.log(post);
  }
}
