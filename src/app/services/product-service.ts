import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/product';
import { ProductResponse } from '../types/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlAPI = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  get(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.urlAPI);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.urlAPI}/${id}`);
  }

}
