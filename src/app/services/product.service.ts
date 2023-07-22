import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductApi } from '../models/Product';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../models/appState.interface';
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
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

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

  getProducts(): Observable<ProductApi> {
    return this.http.get<ProductApi>(this.apiUrl, httpOptions);
  }

  getProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url, httpOptions);
  }

  deleteProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Product>(url, httpOptions);
  }

  addProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Product>(url, product, httpOptions);
  }

  editProduct(product: Product, id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }
}
