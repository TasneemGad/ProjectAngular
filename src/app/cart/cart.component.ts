import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { ICart } from '../Shared_Interfaces/ICart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartList:ICart[]=[]
  constructor(private services : CartService, private router:Router) { }

    getAllCart() {
    console.log("HH")
    return this.services.getCarts().subscribe(data => { 
      this.cartList = data 
      console.log("Added")
    })
  }

  GoToOrder()
  {
    this.router.navigate(['/Order']);
  }

  ngOnInit(): void {
    this.getAllCart();
  }

}
