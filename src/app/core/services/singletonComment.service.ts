import { Injectable } from '@angular/core';
import { Comment, CommentApi } from '../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class SingletonComment {
  private static instance: SingletonComment;

  private commentApi!: Observable<CommentApi>;
  private comments!: Comment[];

  constructor(private http: HttpClient) {}

  public static getCommentInstance(http: HttpClient): SingletonComment {
    if (!SingletonComment.instance) {
      SingletonComment.instance = new SingletonComment(http);
    }
    return SingletonComment.instance;
  }

  private apiUrl = 'https://dummyjson.com/comments';

  fetchCommentsRequest(): Observable<CommentApi> {
    this.commentApi = this.http.get<CommentApi>(this.apiUrl);
    this.commentApi.subscribe(
      (comments) => (this.comments = comments.comments)
    );
    return this.commentApi;
  }

  getComments(): Comment[] {
    console.log(this.comments);
    return this.comments;
  }

  deleteCommentRequest(id: string): Observable<Comment> {
    const url = `${this.apiUrl}/${id}`;
    this.comments = this.comments.filter((com) => com.id !== parseInt(id));
    return this.http.delete<Comment>(url);
  }
}
