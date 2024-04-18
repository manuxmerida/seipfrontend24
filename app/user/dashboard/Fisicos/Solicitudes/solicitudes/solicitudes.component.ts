import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SoliserviceService } from '../service/soliservice.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent  implements OnInit{

  data:  any[]=[];

  constructor( private api : SoliserviceService, private router:Router) { }

  ngOnInit(): void {
    this.uni();
  }

  uni(){
    this.api.getUnifisica().subscribe((response: any) => { 
      this.data = response.data;
     console.log(response);
    })
  }

  editar(id = []){
    this.router.navigate(['editar-unidadconomicafi', id]);
    }

 


}
