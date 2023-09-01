import { Injectable } from '@angular/core';
import { CommentApi } from '../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingletonComment {
  private static instance: SingletonComment;
  private http!: HttpClient;

  private commentApi!: CommentApi;
  constructor() {}
  public static getCommentInstance() {
    if (SingletonComment.instance) {
      SingletonComment.instance = new SingletonComment();
    }
    return SingletonComment.instance;
  }

  private apiUrl = 'https://dummyjson.com/comments';

  fetchComments(): Observable<CommentApi> {
    return this.http.get<CommentApi>(this.apiUrl);
  }
  getComments() {
    this.fetchComments().subscribe(
      (comments) => (this.commentApi.comments = comments.comments)
    );
  }
}
