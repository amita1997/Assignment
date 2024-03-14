import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = 'https://dummyjson.com';


  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get<any>(`${this.baseUrl}/products`);
  }
  getCategories(){
    return this.http.get<any>(`${this.baseUrl}/products/categories`)
  }

  getProductListByCateogry(cname:string){
    return this.http.get<any>(`${this.baseUrl}/products/category/${cname}`)
  }
  getProductDetails(id:any){
    return this.http.get<any>(`${this.baseUrl}/products/${id}`)
  }
}
