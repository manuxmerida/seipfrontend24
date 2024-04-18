
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region } from '../../../../../admin/dashboard/RegList/interface/region';
import { Office } from '../../../../../admin/dashboard/OfiList/interfaces/office';
import { Municipio } from '../../../../../admin/dashboard/MuniList/interface/municipio';
import { Localidad } from '../../../../../admin/dashboard/LocList/interface/localidad';
import { ServiunidadfisicaService } from '../service/serviunidadfisica.service';
import { ApiService } from '../../../../../admin/dashboard/RegList/service/api.service';
import { MuniserviService } from '../../../../../admin/dashboard/MuniList/service/muniservi.service';
import { LocalidadserviService } from '../../../../../admin/dashboard/LocList/service/localidadservi.service';
import { OficeserviService } from '../../../../../admin/dashboard/OfiList/service/oficeservi.service';

@Component({
  selector: 'app-unidadfisica',
  templateUrl: './unidadfisica.component.html',
  styleUrl: './unidadfisica.component.css'
})
export class UnidadfisicaComponent implements OnInit {
  regi: Region[]=[];
  oficinas:  Office[]=[];
  muni: Municipio[]=[];
  locali: Localidad[]=[];
  FormUni:FormGroup;
  constructor(private  api:ServiunidadfisicaService,private apiRegiones:ApiService  ,  private apiOficinas:OficeserviService,private apiMunicipios: MuniserviService, private apiLocalidades:LocalidadserviService,private router:Router, public formulario:FormBuilder,) {
    this.FormUni=this.formulario.group({
      FechaRegistro: ['',Validators.required],
      Ofcid: ['',Validators.required],
      RNPA: ['',Validators.required],
      RFC: ['',Validators.required],
      CURP: ['',Validators.required],
      Nombres: ['',Validators.required],
      ApPaterno: ['',Validators.required],
      ApMaterno: ['',Validators.required],
      FechaNacimiento: ['',Validators.required],
      Sexo: ['',Validators.required],
      GrupoSanguineo: ['',Validators.required],
      Email: ['',Validators.required],
      Calle: ['',Validators.required],
      NmExterior: ['',Validators.required],
      NmInterior: ['',Validators.required],
      CodigoPostal: ['',Validators.required],
      Locid: [''],
      NmPrincipal: ['',Validators.required],
      TpNmPrincipal: ['',Validators.required],
      NmSecundario: ['',Validators.required],
      TpNmSecundario: ['',Validators.required],
      IniOperaciones: ['',Validators.required],
      ActivoEmbMayor: [false],
      ActivoEmbMenor: [false],
      ActvAcuacultura: [false],
      ActvPesca: [false],
      DocActaNacimiento: ['',Validators.required],
      DocComprobanteDomicilio: ['',Validators.required],
      DocCURP: ['',Validators.required],
      DocIdentificacionOfc: ['',Validators.required],
      DocRFC: ['',Validators.required],
       });
       console.log(this.FormUni);
  }
   
  ngOnInit(): void {
    this.Regiones();
    this.Municipios();
    this.oficin();
    this.Localidades();
   
  } 
  Regiones(){
    this.apiRegiones.getRegiones().subscribe((response: any ) => { 
      this.regi = response.data;
    console.log(response);
    })
  }

  Municipios(){
    this.apiMunicipios.getMunicipios().subscribe((response: any ) => { 
      this.muni = response.data;
    console.log(response);
    })
  }

  Localidades(){
    this.apiLocalidades.getLocalidades().subscribe((response: any ) => { 
      this.locali = response.data;
    console.log(response);
    })
  }

  oficin(){
    this.apiOficinas.getOfi().subscribe((response: any ) => { 
      this.oficinas = response.data;
    console.log(response);
    })
  }

  
  enviar(): any {
    
    console.log(this.FormUni.value);
    this.api.agreUni(this.FormUni.value).subscribe(() => {
      this.router.navigateByUrl('solicitud', { skipLocationChange: false }).then(() => {
        this.router.navigate(['solicitud']);
       
      });
    });

    
  }
  

  
  

  
}
