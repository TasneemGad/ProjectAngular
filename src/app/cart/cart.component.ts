import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ICart } from '../Shared_Interfaces/ICart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartList:ICart[]=[]
  constructor(private services : CartService) { }

  
  // getAllCart()
  // {
  //   console.log("ok")
  //  return this.services.getProduct().subscribe(data=>{this.cartList=data})
  // }
  ngOnInit(): void {
    //this.getAllCart();
  }

}
