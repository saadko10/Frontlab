import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsShellComponent } from './cars-shell/cars-shell.component';


const routes: Routes = [
 {
  path:'',
  component:CarsShellComponent,pathMatch: 'prefix',
  children: [
   
  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaresRoutingModule { }
