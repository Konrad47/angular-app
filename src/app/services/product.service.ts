import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductApi } from '../models/Product';
import { getHttpOptions } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductApi> {
    return this.http.get<ProductApi>(this.apiUrl, getHttpOptions());
  }

  getProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url, getHttpOptions());
  }

  deleteProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Product>(url, getHttpOptions());
  }

  addProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Product>(url, product, getHttpOptions());
  }

  editProduct(product: Product, id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url, product, getHttpOptions());
  }
}
