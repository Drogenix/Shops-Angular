import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {Product} from "../models/product";
import { Shop } from '../models/shop';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product;

  shop:Shop;

  constructor(private apiService:ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getProductById(id).subscribe(response =>
    {
      this.product = response;

      this.apiService.getShopById(this.product.shopId).subscribe(response=>
      {
        this.shop = response;
      })
    })
  }

}
