import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-update-prod',
  templateUrl: './update-prod.component.html',
  styleUrls: ['./update-prod.component.css']
})
export class UpdateProdComponent implements OnInit {
  alert:boolean=false
  editProduct = new FormGroup({
    product_name: new FormControl(''),
    product_price: new FormControl(''),
    product_image: new FormControl('')
  })
  constructor(private router: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.product.getCurrentProduct(this.router.snapshot.params.id).subscribe((result) => {
      this.editProduct = new FormGroup({
        product_name: new FormControl(result['product_name']),
        product_price: new FormControl(result['product_price']),
        product_image: new FormControl(result['product_image'])

      })
    }
    )
  }
  collection()
  {
    console.warn(this.editProduct.value)
    this.product.updateProduct(this.router.snapshot.params.id,this.editProduct.value).subscribe((result)=>
    //console.warn(result))
    this.alert=true
    )
  }

  closeAlert()
  {
    this.alert=false
  }
}
