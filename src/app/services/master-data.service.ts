import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  webAPIUrl: string;
  
  constructor(private _httpClient: HttpClient) {
    this.webAPIUrl = 'http://localhost:51276/api/MasterData/';
  }

  public getAllCategories(){
    return this._httpClient.get(this.webAPIUrl + 'GetAllCategories/');
  }

  public getAllBusinessNatures(){
    return this._httpClient.get(this.webAPIUrl + 'GetAllBusinessNatures/');
  }

  public getAllDistributorshipTypes(){
    return this._httpClient.get(this.webAPIUrl + 'GetAllDistributorshipTypes/');
  }
  
}
