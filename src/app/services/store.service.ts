import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getAllProducts(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    );
  }
}
