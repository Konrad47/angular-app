import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, PostApi } from '../models/Post';
import { AppStateInterface } from '../models/appState.interface';
import { Store, select } from '@ngrx/store';
import { LoggedUser } from '../models/authorization';
import { loggedUserSelector } from '../store/authorization/auth.selectors';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://dummyjson.com/posts';
  loggedUser$: Observable<LoggedUser>;

  constructor(
    private http: HttpClient,
    private store: Store<AppStateInterface>
  ) {
    this.loggedUser$ = this.store.pipe(select(loggedUserSelector));
    this.loggedUser$.subscribe((user) => {
      httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      });
    });
  }

  getPosts(): Observable<PostApi> {
    return this.http.get<PostApi>(this.apiUrl, httpOptions);
  }

  getPost(id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url, httpOptions);
  }

  deletePost(id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Post>(url, httpOptions);
  }

  addPost(post: Post): Observable<Post> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Post>(url, post, httpOptions);
  }

  editPost(post: Post, id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }
}
