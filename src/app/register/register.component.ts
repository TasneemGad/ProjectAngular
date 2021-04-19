import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../Validations/ConfirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({
    userName :['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',[Validators.required]]
  },{validators:[ConfirmPasswordValidator]})

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
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
