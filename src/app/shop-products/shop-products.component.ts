import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {Shop} from "../models/shop";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  shop:Shop;

  constructor(private apiService:ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getShopById(id).subscribe(response =>
    {
      this.shop = response;
    })
  }

}
