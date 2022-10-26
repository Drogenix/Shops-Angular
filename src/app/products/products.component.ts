import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]

  constructor(private apiService:ApiService) { }

  ngOnInit(): void
  {
   this.apiService.getProducts().subscribe(response=>
   {
     this.products = response;
   })
  }

  deleteProduct(id:number, index:number)
  {
    this.apiService.deleteProduct(id).subscribe(()=>
    {
      window.alert("Продукт удалён!")

      this.products.splice(index,1)
    })
  }

}
