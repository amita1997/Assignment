import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  categoriesList: any;
  cname:any = ''
  isLoading:boolean = false;



  constructor(private appservice : AppService,private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.getCategories();
    this.getCategorieslist();
    this.cname = this.activatedRoute.snapshot.params['pid'];

  }

  getCategorieslist(){
    this.isLoading = false
    this.appservice.getCategories().subscribe(res => {
      this.isLoading = true
      this.categoriesList = res
      console.log(res)
    },
    )
  }
  getCategories(){
    this.appservice.getProductListByCateogry(this.cname).subscribe(res => {
      this.categoriesList = res
      console.log(res)
    },
    )
  }



}
