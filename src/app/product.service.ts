import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getuserLogin(value: any) {
    throw new Error("Method not implemented.");
  }
url="http://localhost:3000/product"
rootUrl="http://localhost:3000/"
loginUrl="http://localhost:3000/login"
  constructor(private http:HttpClient) { }
  getlist()
  {
   return this.http.get(this.url);
  }
  saveProduct(data)
  {
    //console.warn("service",data)
   return  this.http.post(this.url,data);
  }
  deleteProduct(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentProduct(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateProduct(id,data)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data)
  {
    return this.http.post(this.rootUrl+"users",data)
  }
  getLogin(data)
  {
    return this.http.post(this.loginUrl,data)
  }
}
