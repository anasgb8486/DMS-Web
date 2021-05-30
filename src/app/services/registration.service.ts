import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationDto } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  webAPIUrl: string;
  public registrationDto: RegistrationDto;
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
    this.registrationDto = new RegistrationDto();
    // this.webAPIUrl = 'http://localhost:51276/api/BrandProduct/';
    this.webAPIUrl = 'https://dmsapi20210529232937.azurewebsites.net/api/BrandProduct/';
  }

  saveUserRegistrationDetails(registrationDto: RegistrationDto): Observable<any> {
    console.log(registrationDto);
    return this._httpClient.post<any>(this.webAPIUrl + 'SaveUserRegistrationDetails/', JSON.stringify(registrationDto), this.httpOptions);
  }



}
