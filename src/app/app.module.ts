import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DafaultModule } from './layouts/dafault/dafault.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {ClientListComponent} from "./components/client-list.component";
import {ClientDetailComponent} from "./components/client-details.component";
import {HeartbeatChartComponent} from "./components/heartbeat-chart.component";
import {NgApexchartsModule} from "ng-apexcharts";



@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailComponent,
    HeartbeatChartComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DafaultModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    NgApexchartsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
