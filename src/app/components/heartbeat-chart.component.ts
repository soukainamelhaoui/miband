import { Component, OnInit } from "@angular/core";
import { HeartbeatService } from '../services/heartbeat.service';

@Component({
  templateUrl: "./heartbeat-chart.component.html"
})
export class HeartbeatChartComponent implements OnInit {
  public chartOptions: any[] = [];
  public heartbeats: any[] = [];

  constructor(private heartbeatService: HeartbeatService) {
  }

  ngOnInit() {
    this.heartbeatService.getHeartbeats().subscribe(
      (response: Object) => { // Adjust the type to Object
        this.heartbeats = response as any[]; // Cast the response to any[] if necessary

        // Generate charts based on unique client IDs
        const uniqueIDs = Array.from(new Set(this.heartbeats.map(heartbeat => heartbeat.id)));

        uniqueIDs.forEach(id => {
          const dataForID = this.heartbeats.find(heartbeat => heartbeat.id === id);

          const chartData = [
            { x: "data1", y: dataForID.data1 },
            { x: "data2", y: dataForID.data2 },
            { x: "data3", y: dataForID.data3 },
            { x: "data4", y: dataForID.data4 }
          ];

          // Filter out NaN values
          const filteredChartData = chartData.filter(dataPoint => dataPoint.y !== "");

          const chartOption = {
            series: [
              {
                name: "Heartbeat",
                data: filteredChartData
              }
            ],
            chart: {
              height: 350,
              type: "line",
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: "straight",
              width: 2
            },
            title: {
              text: `Client ID: ${id}`,
              align: "left"
            },
            grid: {
              row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0.5
              }
            },
            xaxis: {
              categories: ["data1", "data2", "data3", "data4"]
            }
          };


          this.chartOptions.push(chartOption);
        });
      },
      (error) => {
        console.log('Error retrieving heartbeats:', error);
      }
    );
  }
}
