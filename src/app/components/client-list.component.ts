import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from "@angular/router";
import { Client } from '../models/client.model';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];
  client: Client = new Client();
  constructor(
    private clientService: ClientService,
    private router: Router,
    private postService: PostService
  ) { }
  ngAfterViewInit() {
    this.fetchPosts();
  }
  ngOnInit() {
    // this.fetchPosts();
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
    this.client = this.clients.find((cli: Client) => {
      return cli.id === clientId
    }) as Client

    if (this.client) {
      this.router.navigateByUrl('/def/UpdateClient', { state: { client: this.client } });
    }
  }

  deleteClient(clientId: number) {
    this.clientService.deleteClientById(clientId).subscribe(
      (res) => {
        this.clients = this.clients.filter((cli: Client) => {
          return cli.id != clientId;
        });
        console.log('Client deleted successfully');

      },
      (error) => {
        console.log('Error deleting client:', error);
      }
    );
  }
  //ajouter profile
  AjouterClient() {
    this.router.navigate(["/def/CreateClient"])
  }
  //add pagination
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];


  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response: any) => {
        this.POSTS = response;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
