import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartpageComponent } from './cartpage/cartpage.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'search/:searchItem', component:HomeComponent},
  { path:'tag/:tag' ,component:HomeComponent},
  { path:'food/:id',component:FoodpageComponent},
  { path:'cart-page',component:CartpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
