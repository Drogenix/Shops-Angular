import {Customer} from "./customer";
import {OrderProduct} from "./order-product";

export interface Order
{
  id:number;

  customer: Customer;

  products: OrderProduct[];

  status: number;
}
