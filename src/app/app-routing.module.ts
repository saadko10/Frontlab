import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsShellComponent } from './clients/clients-shell/clients-shell.component';
import { RegurlarsComponent } from './clients/regurlars/regurlars.component';
import { TestOutComponent } from './test-out/test-out.component';


const routes: Routes = [
  {
    path:"cars",
    loadChildren:'./cares/cares.module#CaresModule'
  },
  {
    path:"out",
    component:TestOutComponent
  },
  {
    path:'clients',
    component:ClientsShellComponent,pathMatch: 'prefix',
    children: [
      {
        path:"regular",
        component:RegurlarsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
