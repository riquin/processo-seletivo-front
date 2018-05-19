import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpInterceptor } from '../../httpInterceptor';

import { URI_SERVER_API } from '../../app.api';
import { ErrorHandler } from '../../app.error-handler';

import { Unidade } from "./unidade";

@Injectable()
export class UnidadeService {

  constructor(
    public http: HttpInterceptor
  ) { }

  findAll(): Observable<Unidade[]> {
    return this.http
      .get(`${URI_SERVER_API}/unidade`)
      .map(response => response.json().content);
  }

  findOne(id: number): Observable<Unidade> {
    return this.http
      .get(`${URI_SERVER_API}/unidade/${id}`)
      .map(response => response.json().content);
  }

  save(unidade: Unidade): Observable<Unidade> {

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    if (unidade.id) {
      return this.http
        .put(`${URI_SERVER_API}/unidade`, JSON.stringify(unidade), options)
        .map(response => response.json().content);
    }
    else {
      return this.http
        .post(`${URI_SERVER_API}/unidade`, JSON.stringify(unidade), options)
        .map(response => response.json().content);
    }
  }

  delete(id: number): Observable<any> {
    return this.http
      .delete(`${URI_SERVER_API}/unidade/${id}`)
      .map(response => response.json().content);
  }

}
