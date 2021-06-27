import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { district } from '../shared/district';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  getDistrict(): Observable<district[]> {
    return this.http.get<district[]>('/api/districts').pipe();
  }


  constructor(private http: HttpClient) { }
}
