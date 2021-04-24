import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICart } from '../Shared_Interfaces/ICart';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
Geturl="http://localhost:6539/api"
  constructor(private httpGet : HttpClient) { }

  getProduct():Observable<ICart[]>
  {
    console.log("Done")
   return this.httpGet.get<ICart[]>(this.Geturl+'/Products')
  
    
  }
  postProduct(val:ICart):Observable<ICart[]>
  {
    console.log("Done")
   return this.httpGet.post<ICart[]>(this.Geturl,val+'/Products')
  
    
  }
}


// .pipe(catchError((err)=>{
//   return throwError(err.message || 'error Happen')
// }))