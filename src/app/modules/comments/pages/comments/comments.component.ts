import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/core/models/comment.model';
import { SingletonComment } from 'src/app/core/services/singletonComment.service';
import { SingleTon } from 'src/app/core/services/singleton.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  comments: Comment[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    SingletonComment.getCommentInstance(this.http)
      .getComments()
      .subscribe(
        (comments) => (
          console.log(comments), (this.comments = comments.comments)
        )
      );
  }
}
