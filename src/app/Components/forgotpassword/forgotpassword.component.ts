import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  ForgotPasswordForm!: FormGroup;
  constructor(private snackBar:MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.ForgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  EmailValidation() {
    if (this.ForgotPasswordForm.get('email')?.hasError('required')) {
      return "Add Email";
    }
    else if (this.ForgotPasswordForm.get('email')?.hasError('email')) {
      return "Not a valid email";
    }
    return null;
  }

  ForgotPassword()
  {}
  
}
