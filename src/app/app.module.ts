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
import { NgApexchartsModule } from "ng-apexcharts";
import { CreateClientComponent } from './components/create/create-client/create-client.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UpdateClientComponent } from './components/update/update-client/update-client.component';
import { ClientBoardService } from './services/client-board.service';
<<<<<<< HEAD
//pagination for clients list
import { NgxPaginationModule } from 'ngx-pagination';
=======
import { NgChartsModule } from 'ng2-charts';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeartbeatChartComponent } from './components/heartbeat-chart.component';


>>>>>>> 6b58670809766c8f8c9b77c0ec99d2e4c08f1793
@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailComponent,
    CreateClientComponent,
    LoginComponent,
    UpdateClientComponent,
    DashboardComponent,
    HeartbeatChartComponent

    
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
<<<<<<< HEAD
    NgChartsModule,
    NgxPaginationModule
=======
    NgChartsModule ,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports:[
    DashboardComponent,
    HeartbeatChartComponent

>>>>>>> 6b58670809766c8f8c9b77c0ec99d2e4c08f1793
  ],
  providers: [ClientBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
