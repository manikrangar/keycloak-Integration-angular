import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user='';
  constructor(private KeycloakService:KeycloakService) {
   }

  ngOnInit(): void {
    // this.initializeUserOption();
  }

  initializeUserOption(){
    console.log(this.KeycloakService.getUsername());
  }
  
  
  logout(){
    this.KeycloakService.logout("http://localhost:4200");
  }

}
