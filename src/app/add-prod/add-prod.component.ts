import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {
  alert:boolean=false
  addProduct= new FormGroup({
    product_name: new FormControl(''),
    product_price: new FormControl(''),
    product_image: new FormControl('')
  })
  selectedFile=null;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }
  collectProduct()
    {
     // console.warn(this.addProduct.value)
      this.product.saveProduct(this.addProduct.value).subscribe((result)=>{
        this.alert=true
      this.addProduct.reset({})
       // console.warn("result is here",result)
      })
      
    }
    onFileSelected(event){
      this.selectedFile=event.target.files[0];
      console.log(event)
    }
  
closeAlert()
{
  this.alert=false
}
}
