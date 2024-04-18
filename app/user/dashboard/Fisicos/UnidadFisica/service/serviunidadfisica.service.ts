import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadFisica } from '../interfaces/unidadfisica';

@Injectable({
  providedIn: 'root'
})
export class ServiunidadfisicaService {
  path2 = `${environment.API_URL}unidades_economicas_pa_fisico`;



  constructor(private http: HttpClient ) {}
    getUnifisica(){
      return this.http.get('http://localhost:8000/api/unidades_economicas_pa_fisico');
    }
    agreUni(uni: UnidadFisica):Observable<UnidadFisica>{
      let direccion = "http://localhost:8000/api/unidades_economicas_pa_fisico";
      return this.http.post<UnidadFisica>(direccion, uni)
    }
   }

