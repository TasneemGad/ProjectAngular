import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

import { Router } from '@angular/router';    
import { LoginService } from '../Services/Login.service';    
 import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    LoginForm=this.fb.group({
    Name :['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]],
    grant_type:['']
    }) 

    model : any={};    

    errorMessage:string=""; 
  constructor(private fb:FormBuilder , private router:Router,private LoginService:LoginService ) { }

  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  } 
  login(y:any){ 
    console.log("login");   
  /*   debugger;  */   
    this.LoginService.Login(this.model).subscribe(    
      data => {    
   /*      debugger;   */  
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/Home']);    
        /*   debugger; */    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };

   get Name ()
  {
    return this.LoginForm.get('Name');
  }
  
  get password ()
  {
    return this.LoginForm.get('password');
  } 


}
