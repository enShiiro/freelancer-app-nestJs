import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './views/registration/registration.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:RegistrationComponent
  },
  {
    path:'freelancer',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
