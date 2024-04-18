import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/module/shared/shared.module';
import { LocationComponent } from '../location/location.component';
import { UpdlocComponent } from '../updloc/updloc.component';



@NgModule({
  declarations: [
    LocationComponent,
  UpdlocComponent
  ],
  imports: [
    
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LocamodModule { }
