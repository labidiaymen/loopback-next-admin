import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from '../@pages/home/home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
