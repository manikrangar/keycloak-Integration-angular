// import { AuthGuard } from './../utility/app.guard';
import { Component, OnInit } from '@angular/core';
// import { initializeKeycloak } from '../utility/app.init';
import Keycloak from 'keycloak-js';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot
  } from '@angular/router';
import { initializeKeycloak } from '../utility/app.init';
// import { caller } from '../utility/app.caller';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent  implements OnInit {

  constructor(protected router: Router) {
   
  }
  ngOnInit(): void {
    // initializeKeycloak(new KeycloakService());
  }
  // keycloak = new Keycloak({
  //   url: 'http://localhost:8080/',
  //   realm: 'angular-web',
  //   clientId: 'angular-web-client'
  // });

  // // inilizeKeycloak(){


  // //   this.keycloak.init({onLoad:'login-required'}).then(function(authenticated) {
  // //     alert(authenticated ? 'authenticated' : 'not authenticated');
  // // }).catch(function() {
  // //     alert('failed to initialize');
  // // });
  // // }

  login(){
    initializeKeycloak()
    // this.keycloak.login({redirectUri:'http://localhost:4200/dashboard'});

    // initializeKeycloak(this.keycloak);
    // this.KeycloakService.login();
    // AuthGuard
    
    // this.isAccessAllowed(new ActivatedRouteSnapshot,new RouterStateSnapshot);
    // this.clicked=true;
    // caller();
    // this.inilizeKeycloak();
    // this.keycloak.login({
    //   // redirectUri: window.location.origin + state.url,
    //   redirectUri: "http://localhost:4200/dashboard",
  
    // })
    // initializeKeycloak(new KeycloakService())
  }
  



}
