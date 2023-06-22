import { Component, OnInit } from "@angular/core";
import { HeartbeatService } from '../services/heartbeat.service';
import { Chart } from "chart.js";
import { NgZone } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ClientBoardService } from 'src/app/services/client-board.service';

@Component({
  selector: 'app-heartbeat-chart',
  templateUrl: "./heartbeat-chart.component.html"
})
export class HeartbeatChartComponent implements OnInit {
  public chartOptions: any[] = [];
  public heartbeats: any[] = [];
  public id!: string;


  public chart: any;
  updateInterval: number = 3000; // Update interval in milliseconds
  dataSubscription: Subscription = new Subscription;
  // public lineChartOptions: any = {
  //   responsive: true,
  //   scales: {
  //     x: {
  //       display: false
  //     },
  //     y: {
  //       display: false
  //     }
  //   }
  // };





  constructor(private heartbeatService: HeartbeatService, private ngZone: NgZone,private clientBoard: ClientBoardService) {
  }

  ngOnInit() {
    this.clientBoard.loadFromLocalStorage();
    this.id = this.clientBoard.id;
    this.createChart();
    this.startRealTimeUpdates();

    }
   
   createChart() {
    const clientId = parseInt(this.id); // Replace with the desired client ID
    console.log("clientId",clientId);
    this.heartbeatService.getClientHeartbeats(clientId).subscribe(
      (response: any[]) => {
        // Sort the response by date_prelevement in descending order
        const sortedResponse = response.sort((a, b) => new Date(b.date_prelevement).getTime() - new Date(a.date_prelevement).getTime());
  
        // Get the last 20 records from the sorted response
        const last20Records = sortedResponse.slice(0, 60);
  
        const labels = last20Records.map((heartbeat: any) => heartbeat.date_prelevement).reverse();
        const data = last20Records.map((heartbeat: any) => heartbeat.data1).reverse();
  
        // Create the chart using the extracted data
        this.chart = new Chart("MyChart", {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: "Heartbeat",
                data: data,
                 borderColor:'red',
      backgroundColor: 'red',
              }
            ]
          },
          options: {
            aspectRatio: 8,
            scales: {
              x: {
                display: false // Hide the x-axis labels
              }
            }
          }
        });
      },
      (error: any) => {
        console.error('Error fetching chart data:', error);
      }
    );
  }

  startRealTimeUpdates() {
    const clientId = parseInt(this.id); // Replace with the desired client ID
  
    // Clear any existing subscription
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    // Start the real-time update process
    this.dataSubscription = timer(0, this.updateInterval).pipe(
      switchMap(() => this.heartbeatService.getClientHeartbeats(clientId))
    ).subscribe(
      (response: any[]) => {
        // Sort the response by date_prelevement in descending order
        const sortedResponse = response.sort((a, b) => new Date(b.date_prelevement).getTime() - new Date(a.date_prelevement).getTime());
  
        // Get the last 20 records from the sorted response
        const last20Records = sortedResponse.slice(0, 60);
  
        const labels = last20Records.map((heartbeat: any) => heartbeat.date_prelevement).reverse();
        const data = last20Records.map((heartbeat: any) => heartbeat.data1).reverse();
  
        // Update the chart with new data
        this.ngZone.run(() => {
          this.chart.data.labels = labels;
          this.chart.data.datasets[0].data = data;
          this.chart.update();
        });
      },
      (error: any) => {
        console.error('Error fetching real-time chart data:', error);
      }
    );
  }
  
  
   
}
