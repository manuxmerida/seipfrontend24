import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesComponent } from '../species/species.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/module/shared/shared.module';
import { UpdatespecieComponent } from '../updatespecie/updatespecie.component';



@NgModule({
  declarations: [
    SpeciesComponent,
    UpdatespecieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SpemodModule { }
