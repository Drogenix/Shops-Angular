import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../models/order";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order;

  constructor(private apiService:ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getOrderById(id).subscribe(response =>
    {
      this.order = response;
    })
  }

}
