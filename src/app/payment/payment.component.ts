import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../Services/payment.service';
import { ProductService } from '../Services/product.service';
import { IPayment } from '../Shared_Interfaces/IPayment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {
flag:Boolean = false
makePayment = new IPayment 

  constructor(private services: PaymentService) { }
  ngOnInit(): void {
  // this.TestFun();
  }

  ConfirmPayment()
  {
    // this.flag = true ;
  }

  onSubmitPayment() {
    this.flag = true ;
    console.log("Added")
    return this.services.postPayment(this.makePayment).subscribe(data => {
      this.makePayment = data
      console.log(this.makePayment)
    })
  }

  // TestFun()
  // {
  //   this.flag = true ;
  //   console.log("Added")
  //   return this.services.postPayment(this.makePayment).subscribe(data => {
  //     this.makePayment = data
  //     console.log(this.makePayment)
  //   })
  // }
}
