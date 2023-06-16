import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DafaultModule } from './layouts/dafault/dafault.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ClientListComponent } from "./components/client-list.component";
import { ClientDetailComponent } from "./components/client-details.component";
import { HeartbeatChartComponent } from "./components/heartbeat-chart.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { CreateClientComponent } from './components/create/create-client/create-client.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailComponent,
    CreateClientComponent,
    HeartbeatChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DafaultModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
