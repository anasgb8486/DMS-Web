import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  webAPIUrl: string;

  constructor(private _httpClient: HttpClient) {
    // this.webAPIUrl = 'http://localhost:51276/api/MasterData/';
    this.webAPIUrl = 'https://dmsapi20210529232937.azurewebsites.net/api/MasterData/';
  }

  public getAllCategories(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.webAPIUrl + 'GetAllCategories/');
  }

  public getAllCategoriesMasterData(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.webAPIUrl + 'getAllCategoriesMasterData/');
  }

  public getAllBusinessNatures() {
    return this._httpClient.get(this.webAPIUrl + 'GetAllBusinessNatures/');
  }

  public getAllDistributorshipTypes() {
    return this._httpClient.get(this.webAPIUrl + 'GetAllDistributorshipTypes/');
  }

  public getProducts() {
    return this._httpClient.get(this.webAPIUrl + 'GetAllProducts/');
  }

  public getAllLocations() {
    return this._httpClient.get(this.webAPIUrl + 'GetAllLocations/');
  }

}
