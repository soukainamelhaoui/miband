import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DafaultModule } from './layouts/dafault/dafault.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ClientListComponent } from "./Components/client-list.component";
import { ClientDetailComponent } from "./Components/client-details.component";
import { CreateClientComponent } from './components/create/create-client/create-client.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailComponent,
    CreateClientComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DafaultModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
