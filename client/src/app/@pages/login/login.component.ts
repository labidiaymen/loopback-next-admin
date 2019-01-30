import { Component, OnInit } from '@angular/core';
import { LabRouter } from '@sdk/lab-router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { GlobalRoute, Modules } from '@sdk/default-router';
import { UiService } from 'src/app/@core/services/ui.service';
import { Authentication } from '@sdk/authentication';
import { LBStorage } from '@sdk/lb-storage';

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
    if (this.validateForm.valid) {
      const formData = this.validateForm.getRawValue();
      delete (formData['remember']);

      const loadingMessageId = this.uiService.displayLoadingIndicator('Chargement en cours ...');
      Authentication.login(formData).subscribe((result) => {
        console.log(result);
        if ('status' in result) {
          const { status } = result;
          if (status === 200) {
            const { token } = result.json;
            LBStorage.saveToken(token);
            LabRouter.next(Modules.Dashboard);
            this.uiService.displaySuccessMessage('Login succeed');
          } else {
            this.uiService.displayErrorMessage('login failed!');
          }
        }
        this.uiService.hideLoadingIndicator(loadingMessageId);
      }, console.error);
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
    LabRouter.next(GlobalRoute.Register);
  }

  /**
   * @returns void
   */
  navigateToForgotPassword(): void {
    LabRouter.next(GlobalRoute.ForgotPassword);
  }
}
