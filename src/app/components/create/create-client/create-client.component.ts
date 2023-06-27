import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import { Router } from '@angular/router';
declare var alert: any;


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent {
  client: Client = new Client();
  returnButtonClicked = false;

  constructor(private http: HttpClient, private clientservice: ClientService,private router: Router) { }
 
  saveClient() {
    console.log(this.client);
    if (!this.returnButtonClicked){
    this.clientservice.postClient(this.client)
      .subscribe(
        response => {
          console.log('Enregistrement du client réussi :', response);
          alert('Successful profile registration');
        },
        error => {
          console.error('Erreur lors de l\'enregistrement du client :', error);
          alert('Error when saving profile : ' + error);
        }
      );
      this.client=new Client;

  }
}
returnClicked() {
  this.returnButtonClicked = true;
  this.router.navigate(["/def/clients"])
}
  
}
