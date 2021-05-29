import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApploadDataService {

  webAPIUrl: string;
  // private token = localStorage.getItem('jwt');
  private httpOptions = {
    headers: new HttpHeaders(
      {
        // Authorization: 'Bearer ' + this.token ,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      })
  };

  constructor(private _httpClient: HttpClient) {
    this.webAPIUrl = 'http://localhost:51276/api/Home/GetApplicationLoadData/';
  }

  public getApplicationLoadData(): Observable<any>{
    return this._httpClient.get<any>(this.webAPIUrl);
  }
}
