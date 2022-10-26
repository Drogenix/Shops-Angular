import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {Order} from "../models/order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  activeOrders: Order[];

  completeOrders: Order[];

  sectionName:string = "Активные"

  constructor(private apiService:ApiService) { }

  ngOnInit(): void
  {
    this.updateOrders()
  }

  showActive()
  {
    this.orders = this.activeOrders;

    this.sectionName = "Активные"
  }

  showComplete()
  {
    this.orders = this.completeOrders;

    this.sectionName = "Завершённые"
  }

  updateOrders()
  {
    this.apiService.getOrders().subscribe(response=>
    {
      this.orders = response;

      this.activeOrders = this.orders.filter(item => item.status === 0)

      this.completeOrders = this.orders.filter(item => item.status === 1)

      this.orders = this.activeOrders;
    });
  }

  completeOrder(id:number)
  {

    this.apiService.completeOrder(id).subscribe(() =>
    {
      window.alert('Заказ отмечен как выполненный.')

      this.updateOrders()
    })
  }

}
