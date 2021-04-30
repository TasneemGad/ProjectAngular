import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
/* import {DashboardComponent} from './dashboard/dashboard.component' */

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:"Home/:id" ,component:ProductDetailsComponent},
  {path:"Product" , component:ProductComponent},
  {path:"Home" , component:HeaderComponent
  , children:[{path:"Product" , component:ProductComponent}]},
  {path:"Order" , component:OrderComponent},
  {path:"Cart" , component:CartComponent},
  {path:"Details" , component:ProductDetailsComponent},
  {path:"Payment" , component:PaymentComponent},

   {path:"admin/Product" ,component:AdminProductComponent},
  {path:"admin/Product/new" ,component:AdminProductComponent},
  {path:"Register" , component:RegisterComponent},
  {path:"Login" , component:LoginComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
