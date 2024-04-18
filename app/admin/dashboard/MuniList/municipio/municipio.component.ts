import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { District } from '../../DistList/interface/district';
import { MuniserviService } from '../service/muniservi.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrl: './municipio.component.css'
})
export class MunicipioComponent implements OnInit {
  FormMunicipio:FormGroup;
  data:  any[]=[];
  datos:  any[]=[];
  distrito: District[]=[];
  constructor(private api:MuniserviService,private router:Router, public formulario:FormBuilder){ 
  this.FormMunicipio=this.formulario.group({
    NombreMunicipio: ['',Validators.required],
    Disid: ['',Validators.required],
    Regid: ['',Validators.required],
     });
     console.log(this.FormMunicipio);
}
  
  ngOnInit(): void {
  
   this.municipios();
   this.region();
   this.distritos();
  }

  municipios(){
    this.api.getMunicipios().subscribe((response: any ) => { 
      this.datos = response.data;
    console.log(response);
    })
  }
  region(){
    this.api.getRegiones().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }

  distritos(){
    this.api.getDistritos().subscribe((response: any ) => { 
      this.distrito = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormMunicipio.value);
    this.api.agreMunicipio(this.FormMunicipio.value).subscribe(() => {
      this.router.navigateByUrl('municipio', { skipLocationChange: true }).then(() => {
        this.router.navigate(['municipio']);
        window.location.reload();
     });
     
    });
  }

editar(id = []){
  this.router.navigate(['updmunicipio', id]);
  }

  borrar(id: any, iControl: any) {
    this.api.deleteM(id).subscribe(
      () => {
        this.data.splice(iControl, 1);
        window.history.replaceState({}, '', '/municipio'); 
        window.location.reload(); 
      },
      (error) => {
        console.log('Error al eliminar:', error);
      }
    );
  }
  cancelar() {
    this.router.navigateByUrl('panel');
  }



}


