import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ICart } from '../Shared_Interfaces/ICart';

@Injectable({
  providedIn: 'root'
})
export class CartService { 

  Geturl = "http://localhost:6539/api/Carts"

  constructor(private httpGet: HttpClient) { }

  getCarts(): Observable<ICart[]> {
    console.log("Done")
    return this.httpGet.get<ICart[]>(this.Geturl)
    }

  getUserCart(id: number) {
    return this.httpGet.get<ICart>(this.Geturl + "/" + id).pipe(catchError((err)=>{
      return throwError(err.message || 'error Happen')
    }))
  }

}


