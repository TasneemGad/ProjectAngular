import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
import { IRegister } from '../Shared_Interfaces/IRegister';
import { map } from 'rxjs/operators';

@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
  UrlReg :string; 
  UrlLog :string;
  token : string='';  
  header : any;  
  currentUser: Observable<any>;

  constructor(private http : HttpClient
    ) {   

    this.UrlReg = "http://localhost:6539/api/Account"; 
    this.UrlLog = "http://localhost:6539/login";

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 

  }  

   Login(model : any){ 
    console.log("login"); 
   console.log(this.header);
   console.log(model)
   var reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' })

   return this.http.post(this.UrlLog,model,{ headers: reqHeader});
   
  //  .pipe(map(userInfo => {
  //       localStorage.setItem('token', userInfo.token)
  //       this.currentUser = userInfo.
  //       return userInfo.user
  //     }))
  

  }   
   CreateUser(register:IRegister)  
   { 
    console.log("Saved"); 
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<IRegister[]>(this.UrlReg+'/Register/' , register, httpOptions)  
   }  
}  








