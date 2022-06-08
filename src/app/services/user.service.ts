import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from './configuration';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable()
export class UserService {
  public url: string;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }
  //Retorna un hilo, hace peticion
  getUsers(): Observable<any> {
    let headers = new HttpHeaders().set(
      'Content-type',
      'application/x-www-form-urlenconded'
    );
    return this._http.get(this.url + 'user', { headers: headers });
  }

  register(user: User): Observable<any> {
    let data = JSON.stringify(user);
    let params = 'json=' + data;
    let httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    let options = {
      headers: httpHeaders,
    };
    return this._http.post(this.url + 'user', params, options);
  }
}
