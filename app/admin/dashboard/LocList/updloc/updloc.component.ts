import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Localidad } from '../interface/localidad';

import { ActivatedRoute, Router } from '@angular/router';
import { LocalidadserviService } from '../service/localidadservi.service';

@Component({
  selector: 'app-updloc',
  templateUrl: './updloc.component.html',
  styleUrl: './updloc.component.css'
})
export class UpdlocComponent implements OnInit {
  formuLocalidad: FormGroup;
  idLocalidad: any;
  regiones: any[] = [];
  distritos: any[] = [];
  municipios: any[] = [];
  @Input() datosLocalidad: Localidad = { id:'',NombreLocalidad: '', Munid: '',Disid: '', Regid: '' };
  constructor(public formulario: FormBuilder, private api:LocalidadserviService,private router:Router, private activate:ActivatedRoute ){
    this.idLocalidad = this.activate.snapshot.paramMap.get('id');
    this.api.getIdLocalidad(this.idLocalidad).subscribe(datosLocalidad =>{
      console.log(datosLocalidad);
      this.formuLocalidad.setValue({
        id: datosLocalidad[0]['id'],
       NombreLocalidad: datosLocalidad[0]['NombreComun'],
        Munid: datosLocalidad[0]['Munid'],
        Disid: datosLocalidad[0]['Disid'],
        Regid: datosLocalidad[0]['Regid']
      }
      );
    }
    );
    this.formuLocalidad=this.formulario.group({
      id: [''],
     NombreLocalidad: [''],
      Munid: [''],
      Disid: [''],
      Regid: ['']
      });
  }
  
  ngOnInit(): void {
   this.showLocalidad();
   this.getMunicipio();
   this.getRegion();
   this.getDistrito();
  }

 showLocalidad(){
  this.api.getIdLocalidad(this.activate.snapshot.params['id']).subscribe((response: any) => { 
    this.datosLocalidad = response.data;
    console.log(response);
  });
 }
   
 getMunicipio(): void {
  this.api.getMunicipios().subscribe((response: any) => {
    this.municipios = response.data;
    console.log('municipio:', this.municipios);
  });
}

 getRegion(): void {
  this.api.getRegiones().subscribe((response: any) => {
    this.regiones = response.data;
    console.log('region:', this.regiones);
  });
}

getDistrito(): void {
  this.api.getDistritos().subscribe((response: any) => {
    this.distritos = response.data;
    console.log('distrito:', this.distritos);
  });
}

cancelar() {
  this.router.navigateByUrl('localidad');
}

  put():any{
    this.api.editLocalidad(this.idLocalidad, this.formuLocalidad.value).subscribe(datosLocalidads => {
      this.router.navigateByUrl('localidad');
    
    });
    
}}
