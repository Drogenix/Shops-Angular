import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api-service/api.service";

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void
  {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      shopId: ['', [Validators.required, Validators.minLength(1)]],
      color: ['', [Validators.required, Validators.minLength(6)]],
      price: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]]
    })
  }

  sendForm() {
    if(this.form.valid)
    {
      this.apiService.addProduct(this.form).subscribe(() => {
      window.alert('Продукт добавлен')
    })
    }
  }
}
