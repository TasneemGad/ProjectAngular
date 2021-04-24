import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
/* import {DashboardComponent} from './dashboard/dashboard.component' */

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},

  {path:"Product" , component:ProductComponent},
  {path:"Home" , component:HeaderComponent
  , children:[{path:"Product" , component:ProductComponent}]},
  {path:"Order" , component:OrderComponent},
  {path:"Cart" , component:CartComponent},
<<<<<<< HEAD
  {path:"Details" , component:ProductDetailsComponent},

   {path:"admin/Product" ,component:AdminProductComponent},
  {path:"admin/Product/new" ,component:AdminProductComponent},
  {path:"Register" , component:RegisterComponent},
  {path:"Login" , component:LoginComponent},
  {path:'**',component:PageNotFoundComponent},

=======
  {path:'' ,redirectTo:'login' ,pathMatch:'full'},
  {path:"Register" , component:RegisterComponent , data:{title:'Add User Page'}},
  {path:"Login" , component:LoginComponent , data:{title:'Login Page'}},
/*   {path:"Dashboard" ,component:DashboardComponent , data:{title:'Dashboard Page'}}, */
>>>>>>> dd7a7fa89fe4259342208520ec3ac71869b91b7b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
