import { AuthService } from './auth.service';
import { APP_INITIALIZER ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KeycloakAngularModule } from 'keycloak-angular';
import { initializeKeycloak } from './utility/app.init';
import { KeycloakService } from 'keycloak-angular';
import { AboutComponent } from './about/about.component';
import { Caller} from './utility/app.caller';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    // {
    //   provide:APP_INITIALIZER,  
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService]
    // },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
