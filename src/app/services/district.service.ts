import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { District } from '../shared/district';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  getDistricts(): Observable<District[]> {
    return this.http.get<District[]>(baseURL+'districts').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  //deleteDistrictById():

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
}
