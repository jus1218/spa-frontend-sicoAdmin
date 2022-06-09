import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuota } from '../models/cuota';
import { global } from './configuration';

@Injectable()
export class CuotaService {

  public url: string;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  getCuotas(): Observable<any> {
    let headers = new HttpHeaders().set(
      'Content-type',
      'application/x-www-form-urlencoded'
    );
    return this._http.get(this.url + 'cuota', { headers: headers });
  }

  register(cuota: Cuota): Observable<any> {
    console.log('Cuota met:');
    console.log(cuota);
    
    
    let data = JSON.stringify(cuota);
    let params = 'json=' + data;
    let httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    let options = {
      headers: httpHeaders,
    };
    return this._http.post(this.url + 'cuota', params, options);
  }
}
