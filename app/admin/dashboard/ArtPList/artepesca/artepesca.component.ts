import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtserviceService } from '../service/artservice.service';

@Component({
  selector: 'app-artepesca',
  templateUrl: './artepesca.component.html',
  styleUrl: './artepesca.component.css'
})
export class ArtepescaComponent  implements OnInit {
  FormArte:FormGroup;
  data:  any[]=[];
  constructor(private api:ArtserviceService,private router:Router, public formulario:FormBuilder){ 
  this.FormArte=this.formulario.group({
    NombreArtePesca: ['',Validators.required],
     });
     console.log(this.FormArte);
}
  
  ngOnInit(): void {
   this.arte();
  }

  arte(){
    this.api.getArt().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormArte.value);
    this.api.agreArt(this.FormArte.value).subscribe(() => {
      this.router.navigateByUrl('artpesca', { skipLocationChange: true }).then(() => {
        this.router.navigate(['artpesca']);
        window.location.reload();
     });
     
    });
  }


editar(id = []){
  this.router.navigate(['updartpesca', id]);
  }

  
  borrar(id: any, iControl: any) {
    this.api.deleteA(id).subscribe(
      () => {
        this.data.splice(iControl, 1);
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

