import { AuthService } from './../auth.service';
import { KeycloakService } from "keycloak-angular";
import Keycloak from "keycloak-js"
import { WelcomeComponent } from "../welcome/welcome.component";
export function initializeKeycloak() {
    // alert("service called")
    // return (): Promise<boolean> =>{
    //   return new Promise(async (resolve,reject)=>{
    //     try{
    //       await keycloak.init({
    //         config:{
    //           url: 'http://localhost:8080/',
    //                 realm: 'angular-web',
    //                 clientId: 'angular-web-client'
    //         },
    //         loadUserProfileAtStartUp:true,
    //         initOptions:{
    //           onLoad:"check-sso",
              
    //           checkLoginIframe:true,
    //           checkLoginIframeInterval:25
    //         },
    //         // interpolation:false;
    //         enableBearerInterceptor: false,
    //       });  
    //       resolve(true);
    //     } catch(error){
    //       reject(error);
    //     }
    //   })
    // }
 
  const service = new Keycloak({
              url: 'http://localhost:8080/',
                    realm: 'angular-web',
                    clientId: 'angular-web-client',
            });
  
return  service.init({
              onLoad:"check-sso",
              
            }).then((res)=>{
            //   debugger
            //   const googleUrl = service.createLoginUrl({
            //     idpHint: 'google'
            // });
            // debugger
  // console.log('login url = ' + googleUrl);

              console.log(res);
              const auth = new AuthService()
              auth.KeycloakInstance=service
              // debugger

              auth.login();
            }).catch((err)=>{
              console.log(err);
              
            })
  }
