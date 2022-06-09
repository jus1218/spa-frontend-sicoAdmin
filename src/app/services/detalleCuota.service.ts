import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './configuration';
import { DetalleCuota } from '../models/detalleCuota';

@Injectable()
export class DetalleCuotaService {

  public url: string;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  getCuotas(): Observable<any> {
    let headers = new HttpHeaders().set(
      'Content-type',
      'application/x-www-form-urlencoded'
    );
    return this._http.get(this.url + 'detallecuota', { headers: headers });
  }

  register(detalleC: DetalleCuota): Observable<any> {
    let data = JSON.stringify(detalleC);
    let params = 'json=' + data;
    let httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    let options = {
      headers: httpHeaders,
    };
    return this._http.post(this.url + 'detallecuota', params, options);
  }
}
