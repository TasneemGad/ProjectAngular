import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductDetails } from '../Shared_Interfaces/IProductDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  
  
  Geturl = "http://localhost:6539/api/Products"

  constructor(private httpGet: HttpClient) { }

  getItemId(id:number)
  {
    return this.httpGet.get<IProductDetails>(this.Geturl+"/"+id)

  }


}
