import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Variable } from '../shared/variable';
import { Loginuser } from '../shared/loginuser';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  
  getVariables(): Observable<Variable[]> {
    return this.http.get<Variable[]>(baseURL+'variables').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

}
