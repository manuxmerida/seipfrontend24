import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Specie } from '../interface/specie';

@Component({
  selector: 'app-updatespecie',
  templateUrl: './updatespecie.component.html',
  styleUrl: './updatespecie.component.css'
})
export class UpdatespecieComponent  {
  formEspecie: FormGroup;
  idEspecie: any;
  
  
  @Input() datosEspecie: Specie = { id:'', NombreEspecie:'' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idEspecie = this.activate.snapshot.paramMap.get('id');
    this.api.getIdEspecie(this.idEspecie).subscribe(datosEspecie =>{
      console.log(datosEspecie);
      this.formEspecie.setValue({
        id: datosEspecie[0]['id'],
        NombreEspecie: datosEspecie[0]['NombreEspecie']
      }
      );
    }
    );
    this.formEspecie=this.formulario.group({
      id: [''],
      NombreEspecie: ['',Validators.required]
      });
  }
  
  ngOnInit(): void {
    this.showArte();
  }

 showArte(){
  this.api.getIdEspecie(this.activate.snapshot.params['id']).subscribe((response: any) => {
      
    this.datosEspecie = response.data;
    console.log(response);
  });
 }
 
    
  put():any{
    this.api.editEsp(this.idEspecie, this.formEspecie.value).subscribe(datosEspecies => {
      this.router.navigateByUrl('especies');
    
    });
 }
 cancelar() {
  this.router.navigateByUrl('especies');
}
}



