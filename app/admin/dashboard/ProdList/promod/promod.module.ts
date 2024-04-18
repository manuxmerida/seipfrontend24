import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProducComponent } from '../produc/produc.component';
import { UpdproComponent } from '../updpro/updpro.component';
import { SharedModule } from '../../../../shared/module/shared/shared.module';



@NgModule({
  declarations: [
    ProducComponent,
    UpdproComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PromodModule { }
