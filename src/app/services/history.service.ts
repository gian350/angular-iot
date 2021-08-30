import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { History } from '../shared/history';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  getHistories(): Observable<History[]> {
    return this.http.get<History[]>(baseURL+'history').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getHistoriesXsensor(idSensor: string): Observable<History[]> {
    return this.http.get<History[]>(baseURL+'history/sensor/'+idSensor).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getMedidaActual(idSensor: string): Observable<History>{
    return this.http.get<History>(baseURL+'measurements/sensor/'+idSensor).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getMedidaActuales(): Observable<History[]>{
    return this.http.get<History[]>(baseURL+'measurements').pipe(catchError(this.processHTTPMsgService.handleError));
  }



  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
}
