import { Component, OnInit } from '@angular/core';
import { LabRouter } from '../../../../@sdk/lab-router';
import { omit } from 'lodash';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { GolablRoute } from '@sdk/default-router';
import { Authentication } from '@sdk/authentication';
import { UiService } from 'src/app/@core/services/ui.service';

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
        this.uiService.hideLoadingIndicator(loadingMessageId);
        this.uiService.displaySuccessMessage();
        this.navigateToLogin();
        console.log(data);
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
  }

  /**
 * @returns void
 */
  navigateToLogin(): void {
    LabRouter.next(GolablRoute.Login);
  }

  /**
   * @returns void
   */
  navigateToForgotPassword(): void {
    LabRouter.next(GolablRoute.ForgotPassword);
  }
}
