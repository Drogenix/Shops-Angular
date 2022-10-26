import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authenticate-service/authentication.service";
import {CookieService} from "ngx-cookie-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthenticationService,
              private cookie:CookieService, private router: Router) { }

  ngOnInit(): void
  {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]]})
  }

  login()
  {
    let formData: any = new FormData();

    formData.append('Login', this.loginForm.get('login')?.value);
    formData.append('Password', this.loginForm.get('password')?.value);

    this.authService.login(formData).subscribe(token =>
    {
      this.cookie.set('shopsApi', token)

      this.authService.getUserRole()

      setTimeout(()=> this.router.navigate(['']), 500)
    })
  }

}
