import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from '../@pages/home/home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DashboardSettingsComponent } from '../@pages/settings/settings.component';
@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardSettingsComponent
  ],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
