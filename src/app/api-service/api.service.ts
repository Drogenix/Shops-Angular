import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, retry} from "rxjs";
import {Order} from "../models/order";
import {Shop} from "../models/shop";
import { Product } from '../models/product';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl:string;

  constructor(private http:HttpClient)
  {
    this.apiUrl = "https://localhost:7224/api/";
  }

  getOrders():Observable<any>
  {
    const url = this.apiUrl + 'Orders'

    return this.http.get(url).pipe(retry(5));
  }

  completeOrder(id:number):Observable<any>
  {
    const url = this.apiUrl + 'Orders';

    let formData = new FormData();

    formData.append('Id', id.toString())

    return this.http.put(url, formData).pipe(retry(5));
  }

  getOrderById(id:number):Observable<Order>
  {
    const url = this.apiUrl + 'Orders/' + id;

    return this.http.get<Order>(url).pipe(retry(5));
  }

  getShops():Observable<Shop[]>
  {
    const url = this.apiUrl + 'Shops'

    return this.http.get<Shop[]>(url).pipe(retry(5));
  }

  getShopById(id:number):Observable<Shop>
  {
    const url = this.apiUrl + 'Shops/' + id;

    return this.http.get<Shop>(url).pipe(retry(5));

  }

  getProducts():Observable<Product[]>
  {
    const url = this.apiUrl + 'Products';

    return this.http.get<Product[]>(url).pipe(retry(5));

  }

  getProductById(id:number):Observable<Product>
  {
    const url = this.apiUrl + 'Products/'+id;

    return this.http.get<Product>(url).pipe(retry(5));

  }

  addProduct(form:FormGroup):Observable<any>
  {
    let url = this.apiUrl + 'Products'

    let formData = this.createForm(form)

    return this.http.post(url, formData);
  }

  editProduct(form:FormGroup, id:number):Observable<any>
  {
    let url = this.apiUrl + 'Products/' + id;

    let formData = this.createForm(form)

    formData.append('Id', id.toString());

    return this.http.put(url, formData);
  }

  deleteProduct(id:number):Observable<any>
  {
    let url = this.apiUrl + 'Products/' + id;

    return this.http.delete(url);
  }

  private createForm(form:FormGroup) : FormData
  {
    let formData: any = new FormData();

    formData.append('Name', form.get('name')?.value);
    formData.append('Color', form.get('color')?.value);
    formData.append('Price', form.get('price')?.value);
    formData.append('ShopId', form.get('shopId')?.value);

    return formData;
  }

}
