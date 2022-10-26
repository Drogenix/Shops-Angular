import {Product} from "./product";

export interface Shop
{
  id:number;

  name:string;

  city:string;

  street:string;

  homeNum:number;

  products: Product[]
}
