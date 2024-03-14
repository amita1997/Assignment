import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
      // pathMatch:"full",
      // redirectTo:"product"
  },
  {
    path: 'product',
    component: ProductsComponent
  },
  {
    path: 'products/categories',
    component: CategoryComponent
  },
  {
    path: 'products/categories/:cname',
    component: CategoryComponent
  },
  {
    path:'products/product-details/:pid',
    component: ProductDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
