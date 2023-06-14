import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://154.49.137.28:8080';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${this.apiUrl}/listClients`);
  }
}
