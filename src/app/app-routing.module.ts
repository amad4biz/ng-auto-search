import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'emp-dash/:id', component: EmpDashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
