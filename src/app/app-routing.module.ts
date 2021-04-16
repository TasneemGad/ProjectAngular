import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"Home" , component:ProductComponent},
  {path:"Order" , component:OrderComponent},
  {path:"Cart" , component:CartComponent},
  {path:"Register" , component:RegisterComponent},
  {path:"Login" , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
