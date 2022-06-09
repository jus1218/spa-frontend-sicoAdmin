import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './configuration';
import { Proveedor } from '../models/proveedor';

@Injectable()
export class ProveedorService {

  public url: string;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  getProveedores(): Observable<any> {
    let headers = new HttpHeaders().set(
      'Content-type',
      'application/x-www-form-urlencoded'
    );
    return this._http.get(this.url + 'proveedor', { headers: headers });
  }

  register(proveedor: Proveedor): Observable<any> {
    
    let data = JSON.stringify(proveedor);
    let params = 'json=' + data;
    let httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    let options = {
      headers: httpHeaders,
    };
    return this._http.post(this.url + 'proveedor', params, options);
  }
}
