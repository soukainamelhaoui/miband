import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from "@angular/router";
import { Client } from '../models/client.model';
import { ClientBoardService } from '../services/client-board.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  client: Client = new Client();
  page: number = 1;
  tableSize: number = 7;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private clientBoardService: ClientBoardService

  ) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe(
      (response: any) => {
        this.clients = response as Client[];
      },
      (error) => {
        console.log('Error retrieving clients:', error);
      }
    );
  }
  //********start pagination********* //
  onPageChange(page: number) {
    this.page = page;
  }

  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.clients.length / this.tableSize);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }
  //********end pagination********* //
  updateClient(clientId: number) {
    // Logic for updating the client with the given clientId
    this.client = this.clients.find((cli: Client) => {
      return cli.id === clientId
    }) as Client

    if (this.client) {
      this.router.navigateByUrl('/def/UpdateClient', { state: { client: this.client } });
    }
  }
  //ajouter profile
  AjouterClient() {
    this.router.navigate(["/def/CreateClient"])
  }
  setClientId(clientId: number) {
    // Set the client ID in the client board service
    this.clientBoardService.setClientId(clientId.toString());
  }

  deleteClient(clientId: number) {

    this.clientService.deleteClientById(clientId)
      .subscribe(
        (response) => {
          this.clients = this.clients.filter((cli: Client) => {
            return cli.id != clientId;
          });
          console.log('Enregistrement du client réussi :', response);
          alert('successfully delete');
        },
        error => {
          console.error('Erreur lors de l\'enregistrement du client :', error);
          alert('delete failed : ' + error);
        }
      );
  }
}