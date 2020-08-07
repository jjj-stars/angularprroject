import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.css']
})
export class ListProdComponent implements OnInit {

  constructor(private product:ProductService) { }
collection:any=[];
  ngOnInit(): void {
    this.product.getlist().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    })
  }
 deleteProduct(item){
   this.collection.splice(item-1,1)
  this.product.deleteProduct(item).subscribe((result)=>{
   console.warn("result",result)
 })
 }
}
