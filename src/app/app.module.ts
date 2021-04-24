import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NavabarComponent } from './navabar/navabar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
=======
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
/*  import { DashboardComponent } from './dashboard/dashboard.component'; */ 
>>>>>>> dd7a7fa89fe4259342208520ec3ac71869b91b7b

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductDetailsComponent,
    NavabarComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    PaymentComponent,
    OrderComponent,
<<<<<<< HEAD
    AdminProductComponent,
    PageNotFoundComponent,
=======
/*     DashboardComponent */
>>>>>>> dd7a7fa89fe4259342208520ec3ac71869b91b7b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
