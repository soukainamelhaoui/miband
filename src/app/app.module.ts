import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import {ClientListComponent} from "./Components/client-list.component";
import {ClientDetailComponent} from "./Components/client-details.component";


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'clients', component: ClientListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
