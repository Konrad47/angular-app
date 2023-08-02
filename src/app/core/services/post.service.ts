import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, PostApi } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostApi> {
    return this.http.get<PostApi>(this.apiUrl);
  }

  getPost(id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  deletePost(id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Post>(url);
  }

  addPost(post: Post): Observable<Post> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Post>(url, post);
  }

  editPost(post: Post, id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Post>(url, post);
  }
}
