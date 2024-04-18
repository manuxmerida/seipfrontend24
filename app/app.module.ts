import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/module/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtemodModule } from './admin/dashboard/ArtPList/artmodule/artmodule.module';
import { HttpClientModule } from '@angular/common/http';
import { DismodModule } from './admin/dashboard/DistList/dismod/dismod.module';
import { SpemodModule } from './admin/dashboard/EspList/spemod/spemod.module';

import { PanelmodModule } from './admin/dashboard/Panel/panelmod/panelmod.module';

import { OffmodModule } from './admin/dashboard/OfiList/offmod/offmod.module';
import { PromodModule } from './admin/dashboard/ProdList/promod/promod.module';
import { RegmodModule } from './admin/dashboard/RegList/regmod/regmod.module';
import { MunmodModule } from './admin/dashboard/MuniList/munmod/munmod.module';
import { LocamodModule } from './admin/dashboard/LocList/locamod/locamod.module';
import { ModunidadfisicaModule } from './user/dashboard/Fisicos/UnidadFisica/modunidadfisica/modunidadfisica.module';
import { SolicitudesComponent } from './user/dashboard/Fisicos/Solicitudes/solicitudes/solicitudes.component';
import { SolicitudmodModule } from './user/dashboard/Fisicos/Solicitudes/solicitudmod/solicitudmod.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ArtemodModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DismodModule,
    SpemodModule,
    PanelmodModule,
    OffmodModule,
    PromodModule,
    RegmodModule,
    MunmodModule,
    LocamodModule,
    ModunidadfisicaModule,
    SolicitudmodModule,
  

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
