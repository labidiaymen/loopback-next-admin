import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabSideMenuComponent } from './@core/components/lab-side-menu/lab-side-menu.component';
import { ContentsComponent } from './contents/contents.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import { LoginComponent } from './@pages/login/login.component';
import en from '@angular/common/locales/en';
import { RegisterComponent } from './@pages/register/register.component';
import { ForgotPasswordComponent } from '@pages/forgot-password/forgot-password.component';
import { HomeComponent } from './@pages/home/home.component';
import { ModulesModule } from './@modules/modules.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LabSideMenuComponent,
    ContentsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
