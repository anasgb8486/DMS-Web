import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Brand } from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
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
    this.webAPIUrl = 'http://localhost:51276/api/BrandProduct/';
  }

  appointOrBecomeDistributorRequest(brandDto: Brand): Observable<any> {
    console.log(brandDto);
    return this._httpClient.post<any>(this.webAPIUrl, JSON.stringify(brandDto), this.httpOptions);
  }
}
