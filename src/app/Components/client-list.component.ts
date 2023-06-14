import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-client-list',
  template: `
    <h2>List of Clients</h2>
    <ul>
      <li *ngFor="let client of clients">
        <p>Client ID: {{ client.id }}</p>
        <p>Client MAC: {{ client.mac }}</p>
        <p>Client Name: {{ client.nom }}</p>
        <p>Client Surname: {{ client.prenom }}</p>
        <p>Client Phone: {{ client.tel }}</p>
        <p>Client Address: {{ client.adresse }}</p>
        <p>Client Email: {{ client.mail }}</p>
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
