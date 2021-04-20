import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICart } from '../Shared_Interfaces/ICart';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
Geturl:string="http://localhost:58842/api/carts"
  constructor(private httpGet : HttpClient) { }
  getCart():Observable<ICart[]>
  {
    console.log("Done")
   return this.httpGet.get<ICart[]>(this.Geturl).pipe(catchError((err)=>{
     return throwError(err.message || 'error Happen')
   }))
  
    
  }
}
