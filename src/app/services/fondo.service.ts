import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from './configuration';
import { Observable } from 'rxjs';
import { FondoCondominal } from '../models/fondoCondominal';
@Injectable()
export class FondoService {
  public url: string;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }
  //Retorna un hilo, hace peticion
  getFondos(): Observable<any> {
    let headers = new HttpHeaders().set(
      'Content-type',
      'application/x-www-form-urlencoded'
    );
    return this._http.get(this.url + 'fondocondominal', { headers: headers });
  }

  getFondo(id: number): Observable<any> {
    return this._http.get(this.url + 'fondocondominal/' + id);
  }

  editFondo(fondo: FondoCondominal): Observable<any> {
    //ver este metodo

    let data = JSON.stringify(fondo);
    let params = 'json=' + data;
    //console.log('params:');
    //console.log(params);

    let headers = new HttpHeaders().set(
      'Content-type',
      'application/x-www-form-urlencoded'
    );

    let options = {
      headers: headers,
    };
    return this._http.put(
      this.url + 'fondocondominal/' + fondo.id,
      params,
      options
    );
  }

  register(fondo: FondoCondominal): Observable<any> {
    let data = JSON.stringify(fondo);
    let params = 'json=' + data;
    let httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    let options = {
      headers: httpHeaders,
    };
    return this._http.post(this.url + 'fondocondominal', params, options);
  }
}
