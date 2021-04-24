import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  massage: string = "";
  registerForm: any;

  constructor(private fb: FormBuilder, private LoginServices: LoginService , private router:Router) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      Name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: [ConfirmPasswordValidator] });

  }

  onFormSubmit() {
    console.log("log")
    const user = this.registerForm.value;
    this.Createemployee(user);
    this.router.navigate(['/Login']);


  }
  Createemployee(register: IRegister) {
    this.LoginServices.CreateUser(register).subscribe(() => {this.data = true;
      this.massage = 'Data saved Successfully';
      console.log("Data saved Successfully");
      this.registerForm.reset();
    })
  }

  get Name() {
    return this.registerForm.get('Name');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
}
