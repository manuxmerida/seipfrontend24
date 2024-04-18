import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artinterface } from '../interface/artinterface';

@Injectable({
  providedIn: 'root'
})
export class ArtserviceService {
  path = `${environment.API_URL}artes_pesca`;
  constructor(private http: HttpClient) { }

  agreArt(pesca: any):Observable<Artinterface>{
    return this.http.post<Artinterface>(`${this.path}`, pesca)
  } 
  getArt(){
    return this.http.get(this.path);
  } 
  deleteA(id:any): Observable<any>{
    return this.http.delete<any>(`${this.path}/${id}`);
  }
  
  getIdArte(id:any):Observable<any>{
    return this.http.get<any>(this.path + '/' + id);  
  }

  editArte(id: any , put:  Artinterface):Observable<Artinterface>{
    let direccion = this.path+"/"+ id;
    return this.http.put<Artinterface>(direccion, put)
  }
}
