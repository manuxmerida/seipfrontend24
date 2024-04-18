import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtepescaComponent } from '../artepesca/artepesca.component';
import { UpdateartComponent } from '../updateart/updateart.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/module/shared/shared.module';

@NgModule({
  declarations: [
    ArtepescaComponent,
    UpdateartComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ArtemodModule { }