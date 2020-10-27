import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOutComponent } from './test-out/test-out.component';
import { ClientsShellComponent } from './clients/clients-shell/clients-shell.component';
import { RegurlarsComponent } from './clients/regurlars/regurlars.component';

@NgModule({
  declarations: [
    AppComponent,
    TestOutComponent,
    ClientsShellComponent,
    RegurlarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
