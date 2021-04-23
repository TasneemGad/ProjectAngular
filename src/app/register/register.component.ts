import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { LoginService } from '../Services/Login.service';
import { IRegister } from '../Shared_Interfaces/IRegister';
import { ConfirmPasswordValidator } from '../Validations/ConfirmPassword.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data = false;       
  massage:string=""; 
  registerForm:any;

  constructor(private fb:FormBuilder ,private LoginServices:LoginService) { }

  ngOnInit(){
  
    this.registerForm =this.fb.group({
    userName :['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',[Validators.required]]
  },{validators:[ConfirmPasswordValidator]});
  
  }
 
  onFormSubmit()    
  {    
    const user = this.registerForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:IRegister)    
  {    
  this.LoginServices.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.registerForm.reset();    
    });    
  } 
 
  get userName ()
  {
    return this.registerForm.get('userName');
  }
  
  get password ()
  {
    return this.registerForm.get('password');
  }

  get confirmPassword ()
  {
    return this.registerForm.get('confirmPassword');
  } 
}
