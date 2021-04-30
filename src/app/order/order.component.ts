import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../Services/order.service';
import { IOrder } from '../Shared_Interfaces/IOrder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  
  makeOrder = new IOrder

  constructor(private services: OrderService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.services.postProduct(this.makeOrder).subscribe(data => {
      this.makeOrder = data
      console.log("Added")
    this.router.navigate(['/Payment']);
    })
  }


}
