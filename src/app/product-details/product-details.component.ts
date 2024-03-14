import { Component,OnInit } from '@angular/core';
import { AppService } from "../app.service";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  pid:any = ''
 productDetails:any = {}
 constructor(private appService : AppService,private activatedRoute: ActivatedRoute){}
 ngOnInit(): void {
    this.pid = this.activatedRoute.snapshot.params['pid'];
    this.getProductDetails()
 }
 
 getProductDetails(){
  this.appService.getProductDetails(this.pid).subscribe(
    res=>{
      console.log(res)
      this.productDetails = res
    },
    err=>{
      console.error(err)
    }
  )
 }
}
