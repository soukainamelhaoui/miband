import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {ClientListComponent} from "./Components/client-list.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'clients', component: ClientListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
