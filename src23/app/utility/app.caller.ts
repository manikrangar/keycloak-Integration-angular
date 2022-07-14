// import { KeycloakService } from 'keycloak-angular';
// import { initializeKeycloak } from './app.init'; 
// export function caller(){
//     initializeKeycloak(new KeycloakService);

import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

// }

export declare const Caller: InjectionToken<readonly (() => Observable<unknown> | Promise<unknown> | void)[]>;
