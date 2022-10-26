import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../models/product";
import {ApiService} from "../api-service/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {

  form: FormGroup;

  product:Product;

  constructor(private fb:FormBuilder, private apiService:ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      shopId: ['', [Validators.required, Validators.minLength(1)]],
      color: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]]
    })

    this.apiService.getProductById(id).subscribe(response=>{
      this.product = response;

      this.form.get('name')?.setValue(this.product.name)

      this.form.get('shopId')?.setValue(this.product.shopId)

      this.form.get('color')?.setValue(this.product.color)

      this.form.get('price')?.setValue(this.product.price)

    })


  }

  sendForm() {
    if(this.form.valid)
    {
      this.apiService.editProduct(this.form, this.product.id).subscribe(() => {
        window.alert('Продукт изменён!')
      })
    }
  }

}
