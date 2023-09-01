import { Injectable } from '@angular/core';
import { CommentApi } from '../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
export class SingletonComment {
  private static instance: SingletonComment;

  private commentApi!: Observable<CommentApi>;
  constructor(private http: HttpClient) {}

  public static getCommentInstance(http: HttpClient): SingletonComment {
    if (!SingletonComment.instance) {
      SingletonComment.instance = new SingletonComment(http);
    }
    return SingletonComment.instance;
  }

  private apiUrl = 'https://dummyjson.com/comments';

  fetchComments(): Observable<CommentApi> {
    return this.http.get<CommentApi>(this.apiUrl);
  }
  getComments(): Observable<CommentApi> {
    this.commentApi = this.fetchComments();
    return this.commentApi;
  }
}
