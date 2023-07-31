import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductApi } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductApi> {
    return this.http.get<ProductApi>(this.apiUrl);
  }

  getProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  deleteProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Product>(url, product);
  }

  editProduct(product: Product, id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url, product);
  }
}
