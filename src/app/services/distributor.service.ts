import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Brand } from '../models/brand.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
  private API_URL = environment.API_URL;
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
    this.webAPIUrl = this.API_URL + '/api/BrandProduct/';
    // this.webAPIUrl = 'https://dmsapi20210529232937.azurewebsites.net/api/BrandProduct/';
  }

  public getBrandsByCategoryId(categoryId: number): Observable<any>{
    return this._httpClient.get(this.webAPIUrl + 'GetBrandsByCategoryId?categoryId=' + categoryId);
  }

  appointOrBecomeDistributorRequest(brandDto: Brand): Observable<any> {
    return this._httpClient.post<any>(this.webAPIUrl, JSON.stringify(brandDto), this.httpOptions);
  }

  public getBrandsByCategoryId(categoryId: number){
    return this._httpClient.get(this.webAPIUrl + 'GetBrandsByCategoryId/' + categoryId);
  }

}
