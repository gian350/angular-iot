import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user';
import { Loginuser } from '../shared/loginuser';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getSignin(email: String,password: String): Observable<Loginuser> {
    const jsonbody = {email, password}
    return this.http.post<Loginuser>('/api/users/signin',jsonbody).pipe(catchError(this.processHTTPMsgService.handleError));
  }


  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
}
