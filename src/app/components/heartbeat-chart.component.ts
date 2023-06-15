import { Component, OnInit } from '@angular/core';
import { HeartbeatService } from '../services/heartbeat.service';

@Component({
  selector: 'app-client-list',
  template: `
    <h2>List of Heartbeats</h2>
    <ul>
      <li *ngFor="let heartbeat of heartbeats">
        <a>{{ heartbeat.data1 }} {{ heartbeat.data2 }}</a>
      </li>
    </ul>
  `
})
export class HeartbeatListComponent implements OnInit {
  heartbeats: any[] = [];

  constructor(private heartbeatService: HeartbeatService) { }

  ngOnInit() {
    this.heartbeatService.getHeartbeats().subscribe(
      (response: any) => {
        this.heartbeats = response;
      },
      (error) => {
        console.log('Error retrieving clients:', error);
      }
    );
  }
}
