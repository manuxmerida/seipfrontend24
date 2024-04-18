import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artinterface } from '../interface/artinterface';
import { ArtserviceService } from '../service/artservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateart',
  templateUrl: './updateart.component.html',
  styleUrl: './updateart.component.css'
})
export class UpdateartComponent implements OnInit {

  formuArte: FormGroup;
  idArte: any;
  
  
  @Input() datosArte: Artinterface = { id:'', NombreArtePesca: '' };
  constructor(public formulario: FormBuilder, private api:ArtserviceService,private router:Router, private activate:ActivatedRoute ){
    this.idArte = this.activate.snapshot.paramMap.get('id');
    this.api.getIdArte(this.idArte).subscribe(datosArte =>{
      console.log(datosArte);
      this.formuArte.setValue({
        id: datosArte[0]['id'],
        NombreArtePesca: datosArte[0]['NombreArtePesca']
      }
      );
    }
    );
    this.formuArte=this.formulario.group({
      id: [''],
      NombreArtePesca: ['',Validators.required]
      });
  }
  
  ngOnInit(): void {
    this.showArte();
  }

 showArte(){
  this.api.getIdArte(this.activate.snapshot.params['id']).subscribe((response: any) => {
      
    this.datosArte = response.data;
    console.log(response);
  });
 }
 
    
  put():any{
    this.api.editArte(this.idArte, this.formuArte.value).subscribe(datosArtes => {
      this.router.navigateByUrl('artpesca');
    
    });
 }
 cancelar() {
  this.router.navigateByUrl('artpesca');
}
}

