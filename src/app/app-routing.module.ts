import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
/* import {DashboardComponent} from './dashboard/dashboard.component' */

const routes: Routes = [
  {path:"Home" , component:ProductComponent},
  {path:"Order" , component:OrderComponent},
  {path:"Cart" , component:CartComponent},
  {path:'' ,redirectTo:'login' ,pathMatch:'full'},
  {path:"Register" , component:RegisterComponent , data:{title:'Add User Page'}},
  {path:"Login" , component:LoginComponent , data:{title:'Login Page'}},
/*   {path:"Dashboard" ,component:DashboardComponent , data:{title:'Dashboard Page'}}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
