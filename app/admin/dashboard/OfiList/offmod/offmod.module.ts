import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeComponent } from '../office/office.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/module/shared/shared.module';
import { AlterComponent } from '../updoficina/alter.component';




@NgModule({
  declarations: [
    OfficeComponent,
    AlterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OffmodModule { }
