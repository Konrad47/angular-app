import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/core/models/comment.model';
import { SingletonComment } from 'src/app/core/services/singletonComment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  commentId!: string;
  comment!: Comment;
  commentInstance = SingletonComment.getCommentInstance(this.http);

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.commentId = this.route.snapshot.paramMap.get('id') as string;
    this.commentInstance.fetchCommentRequest(this.commentId).subscribe(() => {
      this.comment = this.commentInstance.getComment();
    });
  }
}
