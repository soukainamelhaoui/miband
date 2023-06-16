import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(
    private clientService: ClientService,
    private router: Router,

  ) { }

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

  updateClient(clientId: number) {
    // Logic for updating the client with the given clientId
  }

  deleteClient(clientId: number) {
    this.clientService.deleteClientById(clientId).subscribe(
      () => {
        console.log('Client deleted successfully');
        this.router.navigate(['/clients']); // Redirect to the clients list after deletion
      },
      (error) => {
        console.log('Error deleting client:', error);
      }
    );
  }
}
