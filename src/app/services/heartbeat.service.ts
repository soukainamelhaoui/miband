import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeartbeatService {
  private apiUrl = 'http://154.49.137.28:8080';

  constructor(private http: HttpClient) { }

  getHeartbeats() {
    return this.http.get(`${this.apiUrl}/getHeartbeatsByClient/1?pageNo=0&pageSize=5`);
  }
}
