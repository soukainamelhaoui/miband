import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent {
  client = {
    mac: '',
    nom: '',
    prenom: '',
    tel: '',
    adresse: '',
    mail: ''
  };

  constructor(private http: HttpClient) { }

  saveClient() {
    const url = 'http://154.49.137.28:8080/saveClient';

    const httpOptions = {
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
      );
  }
}
