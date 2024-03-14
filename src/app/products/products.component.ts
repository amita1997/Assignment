import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productList: any;
  isLoading:boolean = false;
  categoriesList:any = []
  constructor(private appservice : AppService){

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

 getProducts(){
  this.isLoading = false
  this.appservice.getProducts().subscribe(res => {
      this.productList = res?.products
      this.isLoading = true
      console.log(res)
    },
    )
  }

  getCategories(){
    this.isLoading = false
    this.appservice.getCategories().subscribe(res => {
      this.categoriesList = res
      this.isLoading = true
      console.log(res)
    },
    )
  }

  filterByCategory(evt:any){
    if(evt?.target.value == 'All'){
      this.getProducts()
    }else{
      this.appservice.getProductListByCateogry(evt.target.value).subscribe(
        res=>{
          this.productList = res?.products
        }
      )
    }
  }

}
