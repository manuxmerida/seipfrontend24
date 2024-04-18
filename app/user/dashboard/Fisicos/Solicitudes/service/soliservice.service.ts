import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from '../interface/solicitud';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SoliserviceService {
  path2 = `${environment.API_URL}unidades_economicas_pa_fisico`;

  constructor(private http: HttpClient ) {}
    getUnifisica()
    {
      return this.http.get('http://localhost:8000/api/unidades_economicas_pa_fisico');
    }
    agreUni(uni: Solicitud):Observable<Solicitud>{
      let direccion = "http://localhost:8000/api/unidades_economicas_pa_fisico";
      return this.http.post<Solicitud>(direccion, uni)
    }
}
