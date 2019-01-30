import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    NgZorroAntdModule
  ],
  exports: [DashboardComponent, NgZorroAntdModule]
})
export class ModulesModule { }
