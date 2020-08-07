import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false
  register = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }
  collection() {
   // console.warn(this.register.value)
    this.product.registerUser(this.register.value).subscribe((result) => {
      console.warn("result", result)
      this.alert=true
    } )
  }
closeAlert()
{
  this.alert=false
}

}
