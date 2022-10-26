import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../authenticate-service/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.authService.logout();

    this.router.navigate(['login'])
  }
}
