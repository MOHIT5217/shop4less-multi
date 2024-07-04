import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products';
import { Category } from '../site-fram/category'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpclients: HttpClient
  ) { }

  createProduct(productBody: any): Observable<Products> {
    const ProductUrl = "http://localhost:3000/products";
    return this.httpclients.post<Products>(ProductUrl, productBody);
  }

  viewProduct(productId: string): Observable<Products> {
    const ProductUrl = "http://localhost:3000/products/" + productId;
    return this.httpclients.get<Products>(ProductUrl)
  }
  viewAllProduct(): Observable<Products> {
    const ProductUrl = "http://localhost:3000/products";
    return this.httpclients.get<Products>(ProductUrl)
  }

  deleteProduct(productId: string): Observable<Products> {
    const ProductUrl = "http://localhost:3000/products/" + productId;
    return this.httpclients.delete<Products>(ProductUrl)
  }
  updateProduct(productId: string, productBody: any): Observable<Products> {
    const ProductUrl = "http://localhost:3000/products/" + productId;
    return this.httpclients.put<Products>(ProductUrl, productBody)
  }
  viewAllProductByCategory(productId: string): Observable<Products> {
    const ProductUrl = "http://localhost:3000/products?category=" + productId;
    console.log(ProductUrl);
    
    return this.httpclients.get<Products>(ProductUrl)
  }
  getCategory(): Observable<Category>{
    const categoryUrl = "http://localhost:3000/categories";
    return this.httpclients.get<Category>(categoryUrl);
  }

  getSearchData(name:string){
    const ProductUrl = "http://localhost:3000/products?category=" + name;
    return this.httpclients.get(ProductUrl)
  }
}
