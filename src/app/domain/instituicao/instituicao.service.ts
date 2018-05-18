import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpInterceptor } from '../../httpInterceptor';

import { URI_SERVER_API } from '../../app.api';
import { ErrorHandler } from '../../app.error-handler';

import { Instituicao } from "./instituicao";

@Injectable()
export class InstituicaoService {

  constructor(
    public http: HttpInterceptor
  ) { }

  findAll(): Observable<Instituicao[]> {
    return this.http
      .get(`${URI_SERVER_API}/instituicao`)
      .map(response => response.json().content);
  }

  findOne(id: number): Observable<Instituicao> {
    return this.http
      .get(`${URI_SERVER_API}/instituicao/${id}`)
      .map(response => response.json().content);
  }

  save(instituicao: Instituicao): Observable<Instituicao> {

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    if (instituicao.id) {
      return this.http
        .put(`${URI_SERVER_API}/instituicao`, JSON.stringify(instituicao), options)
        .map(response => response.json().content);
    }
    else {
      return this.http
        .post(`${URI_SERVER_API}/instituicao`, JSON.stringify(instituicao), options)
        .map(response => response.json().content);
    }
  }

  delete(id: number): Observable<any> {
    return this.http
      .delete(`${URI_SERVER_API}/instituicao/${id}`)
      .map(response => response.json().content);
  }

}
