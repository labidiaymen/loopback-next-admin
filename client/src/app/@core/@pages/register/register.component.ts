import { Component, OnInit } from '@angular/core';
import { omit } from 'lodash';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { GlobalRoute } from '@sdk/default-router';
import { Authentication } from '@sdk/authentication';
import { UiService } from 'src/app/@core/services/ui.service';
import { LabRouter } from '@sdk/lab-router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      const loadingMessageId = this.uiService.displayLoadingIndicator('Chargement en cours ...');
      const formData = this.validateForm.getRawValue();
      delete (formData['remember']);
      Authentication.register(formData).subscribe(data => {
        console.log(data.json());
        if ('status' in data) {
          const { status } = data;
          if (status === 200) {
            this.uiService.displaySuccessMessage();
            this.navigateToLogin();
          } else {
            this.uiService.displayErrorMessage('register failed');
          }
        }
        this.uiService.hideLoadingIndicator(loadingMessageId);
      }, console.error);
    }
  }

  constructor(private fb: FormBuilder, private uiService: UiService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstname: ['Labidi', [Validators.required]],
      surname: ['Aymen', [Validators.required]],
      email: ['labidi@aymen.co', [Validators.required]],
      password: ['password', [Validators.required]],
      remember: [true]
    });
    // this.validateForm = this.fb.group({
    //   firstname: ['', [Validators.required]],
    //   surname: ['', [Validators.required]],
    //   email: ['', [Validators.required]],
    //   password: ['', [Validators.required]],
    //   remember: [true]
    // });
  }

  /**
 * @returns void
 */
  navigateToLogin(): void {
    LabRouter.next(GlobalRoute.Login);
  }

  /**
   * @returns void
   */
  navigateToForgotPassword(): void {
    LabRouter.next(GlobalRoute.ForgotPassword);
  }
}
