import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { RequestCallback } from '../models/request-Callback.model';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  webAPIUrl: string;
  //private token = localStorage.getItem('jwt');
  private httpOptions = {
    headers: new HttpHeaders(
      {
        //Authorization: 'Bearer ' + this.token , 
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      })
  };

  constructor(private _httpClient: HttpClient) {
    this.webAPIUrl = 'http://localhost:51276/api/Enquiry/';
  }

  saveCallbackRequest(requestDto: RequestCallback): Observable<any> {
    console.log(requestDto);
    return this._httpClient.post<any>(this.webAPIUrl, JSON.stringify(requestDto), this.httpOptions);
  }
}
