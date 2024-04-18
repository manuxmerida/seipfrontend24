import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdunidadfisicaComponent } from '../updunidadfisica/updunidadfisica.component';
import { SharedModule } from '../../../../../shared/module/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnidadfisicaComponent } from '../unidadfisica/unidadfisica.component';




@NgModule({
  declarations: [
 UnidadfisicaComponent,
  UpdunidadfisicaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ModunidadfisicaModule { }


