import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICart } from '../Shared_Interfaces/ICart';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
<<<<<<< HEAD
Geturl="http://localhost:6539/api"
=======
Geturl:string="http://localhost:58842/api/Products"
>>>>>>> dd7a7fa89fe4259342208520ec3ac71869b91b7b
  constructor(private httpGet : HttpClient) { }

  getProduct():Observable<ICart[]>
  {
    console.log("Done")
   return this.httpGet.get<ICart[]>(this.Geturl+'/Products')
  
    
  }
  postProduct(val:ICart):Observable<ICart[]>
  {
    console.log("Done")
<<<<<<< HEAD
   return this.httpGet.post<ICart[]>(this.Geturl,val+'/Products')
=======
    return this.httpGet.get<ICart[]>(this.Geturl).pipe(catchError((err)=>{
     return throwError(err.message || 'error Happen')
   }))
>>>>>>> dd7a7fa89fe4259342208520ec3ac71869b91b7b
  
    
  }
}


// .pipe(catchError((err)=>{
//   return throwError(err.message || 'error Happen')
// }))