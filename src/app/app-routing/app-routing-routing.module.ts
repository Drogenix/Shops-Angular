import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from "../orders/orders.component";
import {ShopsComponent} from "../shops/shops.component";
import {ShopProductsComponent} from "../shop-products/shop-products.component";
import {OrderDetailsComponent} from "../order-details/order-details.component";
import {ProductsComponent} from "../products/products.component";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {AddProductFormComponent} from "../add-product-form/add-product-form.component";
import {EditProductFormComponent} from "../edit-product-form/edit-product-form.component";
import {LoginComponent} from "../login/login.component";
import {AuthGuard} from "../auth-guard/auth.guard";
import {AdminGuard} from "../admin-guard/admin.guard";

const routes: Routes = [
  {
    path:'', component:OrdersComponent, canActivate:[AuthGuard]
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'shops', component:ShopsComponent, canActivate:[AuthGuard, AdminGuard]
  },
  {
    path:'shops/:id', component:ShopProductsComponent, canActivate:[AuthGuard, AdminGuard]
  },
  {
    path:'orders/:id', component:OrderDetailsComponent, canActivate:[AuthGuard]
  },
  {
    path:'products', component:ProductsComponent, canActivate:[AuthGuard, AdminGuard]
  },
  {
    path:'products/add', component:AddProductFormComponent, canActivate:[AuthGuard, AdminGuard]
  },
  {
    path:'products/edit/:id', component:EditProductFormComponent, canActivate:[AuthGuard, AdminGuard]
  },
  {
    path:'products/:id', component:ProductDetailsComponent, canActivate:[AuthGuard, AdminGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
