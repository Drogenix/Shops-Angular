import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {Shop} from "../models/shop";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  shops:Shop[]

  constructor(private apiService:ApiService) { }

  ngOnInit(): void
  {
    this.apiService.getShops().subscribe(response=>
    {
      this.shops = response;
    })
  }

}
