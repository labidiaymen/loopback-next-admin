import { Component, OnInit } from '@angular/core';
import { LabRouter } from '@sdk/lab-router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { GolablRoute } from '@sdk/default-router';

@Component({
  selector: 'lab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  /**
   * @returns void
   */
  navigateToRegister(): void {
    LabRouter.next(GolablRoute.Register);
  }

  /**
   * @returns void
   */
  navigateToForgotPassword(): void {
    LabRouter.next(GolablRoute.ForgotPassword);
  }
}
