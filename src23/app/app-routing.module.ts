// import { AuthGuard } from './utility/app.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component'


const routes: Routes = [
  {
    path:"",
    component:WelcomeComponent,
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    // canActivate:[AuthGuard],
  },
  {
    path:".about",
    component:AboutComponent,
    // canActivate:[AuthGuard],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
