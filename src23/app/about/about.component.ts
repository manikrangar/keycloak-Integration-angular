import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // constructor() { }
  public userObject :any;
  public tokens:any;
  public refreshTokens:any;
  constructor(protected readonly keycloak:KeycloakService) { }

  async ngOnInit(): Promise<void> {
    this.userObject=await this.keycloak.loadUserProfile();
    this.tokens=await this.keycloak.getToken();
    this.refreshTokens=this.keycloak.getKeycloakInstance().refreshToken;
  }

  logout()
  {
    console.log("logout");
 
    this.keycloak.logout('http://localhost:4200/');
  }
  async update()
  {
    await this.keycloak.updateToken(-1).then(async()=>{
      this.tokens=await this.keycloak.getToken();
    })
    this.refreshTokens=this.keycloak.getKeycloakInstance().refreshToken;
  }


}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// // })
// export class LoginComponent implements OnInit {

//   public userObject :any;
//   public tokens:any;
//   public refreshTokens:any;
//   constructor(protected readonly keycloak:KeycloakService) { }

//   async ngOnInit(): Promise<void> {
//     this.userObject=await this.keycloak.loadUserProfile();
//     this.tokens=await this.keycloak.getToken();
//     this.refreshTokens=this.keycloak.getKeycloakInstance().refreshToken;
//   }

//   logout()
//   {
//     console.log("logout");
 
//     this.keycloak.logout('http://localhost:4200/');
//   }
//   async update()
//   {
//     await this.keycloak.updateToken(-1).then(async()=>{
//       this.tokens=await this.keycloak.getToken();
//     })
//     this.refreshTokens=this.keycloak.getKeycloakInstance().refreshToken;
//   }
// }

