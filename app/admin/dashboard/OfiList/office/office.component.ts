import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { OficeserviService } from '../service/oficeservi.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrl: './office.component.css'
})
export class OfficeComponent implements OnInit {

  data: any[] = [];
  FormOfi: FormGroup;
  constructor(private api: OficeserviService, private router: Router, public formulario: FormBuilder) {
    this.FormOfi = this.formulario.group({
      NombreOficina: ['', Validators.required],
      Ubicacion: ['', Validators.required],
      Telefono: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.oficin();
  }

  oficin() {
    this.api.getOfi().subscribe((response: any) => {
      this.data = response.data;
      console.log(response);
    })
  }

  enviar(): any {
    console.log(this.FormOfi.value);
    this.api.agreOfi(this.FormOfi.value).subscribe(() => {
      this.router.navigateByUrl('oficinas', { skipLocationChange: true }).then(() => {
        this.router.navigate(['oficinas']);
        window.location.reload();
      });
    });
  }

  editar(id = []) {
    this.router.navigate(['oficinas', id]);
  }

  borrar(id: any, iControl: any) {
    this.api.delete(id).subscribe(
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

