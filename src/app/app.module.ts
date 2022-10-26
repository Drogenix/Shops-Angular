import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './root/app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import {ApiService} from "./api-service/api.service";
import { ShopsComponent } from './shops/shops.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EditProductFormComponent} from "./edit-product-form/edit-product-form.component";
import { AuthInterceptor } from './auth-interceptor/auth-interceptor.interceptor';
import {AuthenticationService} from "./authenticate-service/authentication.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    ShopsComponent,
    ShopProductsComponent,
    OrderDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddProductFormComponent,
    EditProductFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterLinkWithHref,
    RouterOutlet,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ApiService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
