import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  template: `
    <h2>List of Clients</h2>
    <ul>
      <li *ngFor="let client of clients">
        <a [routerLink]="['/clients', client.id]">{{ client.nom }} {{ client.prenom }}</a>
      </li>
    </ul>
  `
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      (response: any) => {
        this.clients = response;
      },
      (error) => {
        console.log('Error retrieving clients:', error);
      }
    );
  }
}
