import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsShellComponent } from './clients-shell/clients-shell.component';


const routes: Routes = [
  {
    path:'',
component:ClientsShellComponent,pathMatch: 'prefix',
children: [
 
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
