import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service'
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
 
  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }
 getuserLogin()
 {
   this.product.getLogin(this.login.value)
   .subscribe(res=>
     console.log(res),
     err => console.log(err)
     )
    // localStorage
 }
}


