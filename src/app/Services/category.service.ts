import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Shared_Interfaces/Category';
import { IProduct } from '../Shared_Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  Geturl = "http://localhost:6539/api/Categories"

  
  constructor(private http:HttpClient) { }
  
  getCtegory(): Observable<ICategory[]> {

    console.log("Done")
    return this.http.get<ICategory[]>(this.Geturl)


  }

}
