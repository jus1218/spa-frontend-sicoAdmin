import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from './configuration';
import { Observable } from 'rxjs';
import { Condomino } from '../models/condomino';



/*
@Injectable({
  providedIn: 'root'
})


*/
@Injectable()
export class CondominoService {

  public url: string;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  getCondominos(): Observable<any> {
    let headers = new HttpHeaders().set(
      'Content-type',
      'application/x-www-form-urlenconded'
    );
    return this._http.get(this.url + 'condomino', { headers: headers });
  }

  register(user: Condomino): Observable<any> {
    let data = JSON.stringify(user);
    let params = 'json=' + data;
    let httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    let options = {
      headers: httpHeaders,
    };
    return this._http.post(this.url + 'condomino', params, options);
  }
}
