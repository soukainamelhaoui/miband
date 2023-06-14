import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DafaultModule } from './layouts/dafault/dafault.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
    BrowserAnimationsModule,
    DafaultModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
