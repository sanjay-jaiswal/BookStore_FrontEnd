import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import {
  MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { Router } from '@angular/router';

import { UserServiceService } from 'src/app/Services/HttpService/UserService/user-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserServiceService, private snackBar: MatSnackBar,
    private route: Router) { }


  RegisterForm!: FormGroup
  hide = false;
  signup = false;
  LoginForm!: FormGroup;
  testing=false;
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%*?&])[A-Za-z\d@#$!%*?&].{4,}'), Validators.minLength(8)])
    }),
      this.RegisterForm = new FormGroup({
        FullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        Password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}')]),
        Mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{10}$')])
      })
  }
  Register() {
    this.testing = true;
    if (!this.RegisterForm.invalid) {
      console.log(this.RegisterForm.value)
      this.userService.Register(this.RegisterForm.value).subscribe(
        (result: any) => {
          console.log(result);
         
        },
       
      );
    }
  }
  
  Login() {
    if (!this.LoginForm.invalid) {
      console.log(this.LoginForm.value);
      this.userService.Login(this.LoginForm.value).subscribe(
        (result: any) => {
          console.log(result);
         
        },
      );
      // this.route.navigate(['/home']);

        
    }
  }

  LocalStorage(data: any, token: any) {
    var user = localStorage.getItem('BookStoreUser');
    if (user != null) {
      localStorage.removeItem('BookStoreUser');
    }
    let obj: any =
    {
      fullName: data.fullName,
      emailId: data.emailId,
      password: data.password,
      mobileNumber: data.mobileNumber,
      userId: data.userId,
      token: token
    }
    user = obj;
    console.log(obj);
    localStorage.setItem('BookStoreUser', JSON.stringify(user));

  }

 

}

