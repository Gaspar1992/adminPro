import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from '../login/login.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '' ,
    component: PagesComponent,
    children: [
      { path: 'dashboard' , component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'grafica1' , component: Graficas1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
