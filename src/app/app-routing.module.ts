import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestOutComponent } from './test-out/test-out.component';


const routes: Routes = [
  {
    path:"cars",
    loadChildren:'./cares/cares.module#CaresModule'
  },
  {
    path:"out",
    component:TestOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
