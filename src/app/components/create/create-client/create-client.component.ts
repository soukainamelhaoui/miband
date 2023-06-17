import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent {
  client: Client = new Client();
  constructor(private http: HttpClient, private clientservice: ClientService) { }

  saveClient() {
    console.log(this.client);

    this.clientservice.postClient(this.client)
      .subscribe(
        response => {
          console.log('Enregistrement du client réussi :', response);
        },
        error => {
          console.error('Erreur lors de l\'enregistrement du client :', error);
        }
      );
  }
  /*const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
 
    this.http.post(url, this.client, httpOptions)
     .subscribe(
       response => {
         console.log('Enregistrement du client réussi :', response);
       },
       error => {
         console.error('Erreur lors de l\'enregistrement du client :', error);
       }
     );*/

}
