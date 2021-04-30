import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPayment } from '../Shared_Interfaces/IPayment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  Geturl = "http://localhost:6539/api/Payments"

  constructor(private httpGet: HttpClient) { }

  postPayment(Payment: IPayment ): Observable<IPayment> {
    console.log("Done")
    return this.httpGet.post<IPayment>(this.Geturl, Payment)
  }
}
