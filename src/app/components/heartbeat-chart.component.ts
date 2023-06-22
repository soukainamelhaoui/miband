import { Component, OnInit } from "@angular/core";
import { HeartbeatService } from '../services/heartbeat.service';
import { Chart } from "chart.js";
import { NgZone } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: "./heartbeat-chart.component.html"
})
export class HeartbeatChartComponent implements OnInit {
  public chartOptions: any[] = [];
  public heartbeats: any[] = [];

  public chart: any;
  updateInterval: number = 5000; // Update interval in milliseconds
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





  constructor(private heartbeatService: HeartbeatService, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.createChart();
    this.startRealTimeUpdates();

    //   this.heartbeatService.getHeartbeats().subscribe(
    //     (response: Object) => { // Adjust the type to Object
    //       this.heartbeats = response as any[]; // Cast the response to any[] if necessary

    //       // Generate charts based on unique client IDs
    //       const uniqueIDs = Array.from(new Set(this.heartbeats.map(heartbeat => heartbeat.id)));

    //       uniqueIDs.forEach(id => {
    //         const dataForID = this.heartbeats.find(heartbeat => heartbeat.id === id);

    //         const chartData = [
    //           { x: "data1", y: dataForID.data1 },
    //           { x: "data2", y: dataForID.data2 },
    //           { x: "data3", y: dataForID.data3 },
    //           { x: "data4", y: dataForID.data4 }
    //         ];

    //         // Filter out NaN values
    //         const filteredChartData = chartData.filter(dataPoint => dataPoint.y !== "");

    //         const chartOption = {
    //           series: [
    //             {
    //               name: "Heartbeat",
    //               data: filteredChartData
    //             }
    //           ],
    //           chart: {
    //             height: 350,
    //             type: "line",
    //             zoom: {
    //               enabled: false
    //             }
    //           },
    //           dataLabels: {
    //             enabled: false
    //           },
    //           stroke: {
    //             curve: "straight",
    //             width: 2
    //           },
    //           title: {
    //             text: `Client ID: ${id}`,
    //             align: "left"
    //           },
    //           grid: {
    //             row: {
    //               colors: ["#f3f3f3", "transparent"],
    //               opacity: 0.5
    //             }
    //           },
    //           xaxis: {
    //             categories: ["data1", "data2", "data3", "data4"]
    //           }
    //         };


    //         this.chartOptions.push(chartOption);
    //       });
    //     },
    //     (error) => {
    //       console.log('Error retrieving heartbeats:', error);
    //     }
    //   );
  }

  createChart() {
    const clientId = 102; // Replace with the desired client ID

    this.heartbeatService.getClientHeartbeats(clientId).subscribe(
      (response: any[]) => {
        const labels = response.map((heartbeat: any) => heartbeat.date_prelevement).reverse();
        const data = response.map((heartbeat: any) => heartbeat.data1).reverse();

        // Create the chart using the extracted data
        this.chart = new Chart("MyChart", {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: "Data",
                data: data,
                backgroundColor: 'blue'
              }
            ]
          },
          options: {
            aspectRatio: 2.5
          }
        });
      },
      (error: any) => {
        console.error('Error fetching chart data:', error);
      }
    );
  }

  startRealTimeUpdates() {
    const clientId = 101; // Replace with the desired client ID

    // Clear any existing subscription
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    // Start the real-time update process
    this.dataSubscription = timer(0, this.updateInterval).pipe(
      switchMap(() => this.heartbeatService.getClientHeartbeats(clientId))
    ).subscribe(
      (response: any[]) => {
        const labels = response.map((heartbeat: any) => heartbeat.date_prelevement);
        const data = response.map((heartbeat: any) => heartbeat.data1);

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
