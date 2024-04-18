import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import { Router } from '@angular/router';
import { Municipio } from '../../MuniList/interface/municipio';
import { District } from '../../DistList/interface/district';
import { LocalidadserviService } from '../service/localidadservi.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {

  FormLocalidad:FormGroup;
  data:  any[]=[];
  datos:  Municipio[]=[];
  distrito: District[]=[];
  localidad: any[]=[];
  constructor(private api:LocalidadserviService,private router:Router, public formulario:FormBuilder){ 
  this.FormLocalidad=this.formulario.group({
    NombreLocalidad: ['',Validators.required],
    Munid: ['',Validators.required],
    Disid: ['',Validators.required],
    Regid: ['',Validators.required],
     });
     console.log(this.FormLocalidad);
}
  
  ngOnInit(): void {
  this.localidades();
   this.municipios();
   this.region();
   this.distritos();
  }
  localidades(){
    this.api.getLocalidades().subscribe((response: any ) => { 
      this.localidad = response.data;
    console.log(response);
    })
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
    console.log(this.FormLocalidad.value);
    this.api.agreLocalidad(this.FormLocalidad.value).subscribe(() => {
      this.router.navigateByUrl('localidad', { skipLocationChange: true }).then(() => {
        this.router.navigate(['localidad']);
        window.location.reload();
     });
     
    });
  }


editar(id = []){
  this.router.navigate(['updlocalidad', id]);
  }

  borrar(id: any, iControl: any) {
    this.api.deleteL(id).subscribe(
      () => {
        this.data.splice(iControl, 1);
        window.history.replaceState({}, '', '/localidad'); 
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

