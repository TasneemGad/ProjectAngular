import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 LoginForm=this.fb.group({
    userName :['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]]
    })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  get userName ()
  {
    return this.LoginForm.get('userName');
  }
  
  get password ()
  {
    return this.LoginForm.get('password');
  }


}
