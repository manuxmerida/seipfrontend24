import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.css'
})
export class SpeciesComponent implements OnInit {
  FormEspecie: FormGroup;
  data: any[] = [];
  constructor(private api: ApiService, private router: Router, public formulario: FormBuilder) {
    this.FormEspecie = this.formulario.group({
      NombreEspecie: ['',Validators.required],
    });
    console.log(this.FormEspecie);
  }

  ngOnInit(): void {
    this.espe();
  }

  espe() {
    this.api.getEspecie().subscribe((response: any) => {
      this.data = response.data;
      console.log(response);
    })
  }

  enviar(): any {
    console.log(this.FormEspecie.value);
    this.api.agreEsp(this.FormEspecie.value).subscribe(() => {
      this.router.navigateByUrl('especies', { skipLocationChange: true }).then(() => {
        this.router.navigate(['especies']);
        window.location.reload();
      });
    });
  }
  editar(id = []){
    this.router.navigate(['updespecie', id]);
    }
  
    
    borrar(id: any, Control: any) {
      this.api.delete(id).subscribe(
        () => {
          this.data.splice(Control, 1);
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


