import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdmuniComponent } from '../updmuni/updmuni.component';
import { MunicipioComponent } from '../municipio/municipio.component';
import { SharedModule } from '../../../../shared/module/shared/shared.module';



@NgModule({
  declarations: [
    UpdmuniComponent,
    MunicipioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MunmodModule { }
