import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../Shared_Interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  Geturl = "http://localhost:6539/api/Orders"

  constructor(private httpGet: HttpClient) { }

  postProduct(product: IOrder): Observable<IOrder> {

    console.log("Done")
    return this.httpGet.post<IOrder>(this.Geturl, product)

  }

}
