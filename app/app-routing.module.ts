import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtepescaComponent } from './admin/dashboard/ArtPList/artepesca/artepesca.component';
import { DistrictComponent } from './admin/dashboard/DistList/district/district.component';
import { SpeciesComponent } from './admin/dashboard/EspList/species/species.component';
import { UpdateartComponent } from './admin/dashboard/ArtPList/updateart/updateart.component';

import { DashboardComponent } from './admin/dashboard/Panel/dashboard/dashboard.component';
import { UpdatespecieComponent } from './admin/dashboard/EspList/updatespecie/updatespecie.component';
import { OfficeComponent } from './admin/dashboard/OfiList/office/office.component';

import { ProducComponent } from './admin/dashboard/ProdList/produc/produc.component';
import { UpdproComponent } from './admin/dashboard/ProdList/updpro/updpro.component';
import { AlterComponent } from './admin/dashboard/OfiList/updoficina/alter.component';
import { RegionComponent } from './admin/dashboard/RegList/region/region.component';
import { UpdregComponent } from './admin/dashboard/RegList/updreg/updreg.component';
import { UpddistComponent } from './admin/dashboard/DistList/upddist/upddist.component';
import { MunicipioComponent } from './admin/dashboard/MuniList/municipio/municipio.component';
import { UpdmuniComponent } from './admin/dashboard/MuniList/updmuni/updmuni.component';
import { LocationComponent } from './admin/dashboard/LocList/location/location.component';
import { UpdlocComponent } from './admin/dashboard/LocList/updloc/updloc.component';
import { UnidadfisicaComponent } from './user/dashboard/Fisicos/UnidadFisica/unidadfisica/unidadfisica.component';
import { SolicitudesComponent } from './user/dashboard/Fisicos/Solicitudes/solicitudes/solicitudes.component';

const routes: Routes = [
  {
    path:'oficinas',
    component:OfficeComponent
  },
  {
    path:'oficinas/:id',
    component:AlterComponent
  },
  {
    path:'especies',
    component:SpeciesComponent
  },
  {
    path:'updespecie/:id',
    component:UpdatespecieComponent
  },

  {
    path:'artpesca',
    component:ArtepescaComponent
  },
  {
    path:'updartpesca/:id',
    component:UpdateartComponent
  },
  {
    path:'productos',
    component:ProducComponent
  },
  {
    path:'productos/:id',
    component:UpdproComponent
  },
  {
    path:'distritos',
    component:DistrictComponent
  },

 
  {
    path:'panel',
    component:DashboardComponent
  },
  {
    path:'localidad',
    component:LocationComponent
  },
  {
    path:'updlocalidad/:id',
    component:UpdlocComponent
  },
  {
    path:'region',
    component:RegionComponent
  },
  {
    path:'updregion/:id',
    component:UpdregComponent
  },
  {
    path:'distrito',
    component:DistrictComponent
  },
  {
    path:'upddistrito/:id',
    component:UpddistComponent
  },

  {
    path:'municipio',
    component:MunicipioComponent
  },
  {
    path:'updmunicipio/:id',
    component:UpdmuniComponent
  },
  {
    path:'uniconomicafisica',
    component:UnidadfisicaComponent
  },
  {
    path:'solicitudes',
    component:SolicitudesComponent
  },


  




 



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
