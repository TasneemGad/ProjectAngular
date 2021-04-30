import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPayment } from '../Shared_Interfaces/IPayment';
import { IProduct } from '../Shared_Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Geturl = "http://localhost:6539/api/Products"

  constructor(private httpGet: HttpClient) { }



  getProduct(): Observable<IProduct[]> {

    console.log("Done")
    return this.httpGet.get<IProduct[]>(this.Geturl)


  }


  postProduct(product: IProduct): Observable<IProduct> {

    console.log("Done")
    return this.httpGet.post<IProduct>(this.Geturl, product)

  }
  getItemId(id: number) {
    return this.httpGet.get<IProduct>(this.Geturl + "/" + id)

  }


}


