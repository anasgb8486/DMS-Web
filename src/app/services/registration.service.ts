import { Injectable } from '@angular/core';
import { RegistrationDto } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { 
    this.registrationDto = new RegistrationDto();
  }

  public registrationDto: RegistrationDto;
}
