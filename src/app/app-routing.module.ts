import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenturesComponent } from './components/ventures/ventures.component';
import { NewComponent } from './components/new/new.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'venture/:id', component:VenturesComponent},
  {path: 'new/', component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
