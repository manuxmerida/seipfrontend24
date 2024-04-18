import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/module/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudesComponent } from '../solicitudes/solicitudes.component';




@NgModule({
  declarations: [
    SolicitudesComponent
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SolicitudmodModule { }
