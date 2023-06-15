import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-detail',
  template: `
    <h2>Client Details</h2>
    <div *ngIf="client">
      <p>Client ID: {{ client.id }}</p>
      <p>Client MAC: {{ client.mac }}</p>
      <p>Client Name: {{ client.nom }}</p>
      <p>Client Surname: {{ client.prenom }}</p>
      <p>Client Phone: {{ client.tel }}</p>
      <p>Client Address: {{ client.adresse }}</p>
      <p>Client Email: {{ client.mail }}</p>
    </div>
  `
})
export class ClientDetailComponent implements OnInit {
  client: any;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    const clientId = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.getClientById(clientId).subscribe(
      (response: any) => {
        this.client = response;
      },
      (error) => {
        console.log('Error retrieving client:', error);
      }
    );
  }
}
