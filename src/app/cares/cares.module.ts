import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaresRoutingModule } from './cares-routing.module';
import { CarsShellComponent } from './cars-shell/cars-shell.component';


@NgModule({
  declarations: [CarsShellComponent],
  imports: [
    CommonModule,
    CaresRoutingModule
  ]
})
export class CaresModule { }
