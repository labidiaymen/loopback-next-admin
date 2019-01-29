import { Component, OnInit } from '@angular/core';
import { LabRouter } from '@sdk/lab-router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { GolablRoute } from '@sdk/default-router';
import { UiService } from 'src/app/@core/services/ui.service';
import { Authentication } from '@sdk/authentication';

@Component({
  selector: 'lab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  submitForm(): void {
    const loadingMessageId = this.uiService.displayLoadingIndicator('Chargement en cours ...');
    setTimeout(() => {
      this.uiService.hideLoadingIndicator(loadingMessageId);
      this.uiService.displaySuccessMessage();
    }, 2000);
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      const formData = this.validateForm.getRawValue();
      delete (formData['remember']);

      console.log(formData);
      Authentication.login(formData).subscribe((result) => {
        console.log(result.body);
        console.log(result);
      });
    }
  }

  constructor(private fb: FormBuilder, private uiService: UiService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
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
