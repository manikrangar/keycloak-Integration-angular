// import { AuthService } from './auth.service';
import  Keycloak  from 'keycloak-js';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  KeycloakInstance:any; 
  constructor() {}
  login(){
    this.KeycloakInstance.login();
  }
   
}
