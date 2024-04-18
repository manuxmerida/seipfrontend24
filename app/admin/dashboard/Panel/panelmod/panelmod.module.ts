import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/module/shared/shared.module';
import { DashboardComponent } from '../dashboard/dashboard.component';






@NgModule({
  declarations: [
DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PanelmodModule { }
