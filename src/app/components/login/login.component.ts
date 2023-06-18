import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { ClientBoardService } from 'src/app/services/client-board.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nom!:string;
  public prenom!:string
  user:User = new User();
  
  constructor(private http: HttpClient,private router: Router,private ClientBoard: ClientBoardService){

  }

  ngOnInit() {}
 

  login() {
    this.http.get<User[]>(`http://154.49.137.28:8080/listClients`).subscribe(
      (response: any[]) => {
        const client = response.find((c) => c.mail === this.user.email && c.mac === this.user.mac);
        if (client) {
          // Client found, handle successful sign-in
          console.log('Client found:', client);
          
          this.ClientBoard.nom = client.nom;
          this.ClientBoard.prenom = client.prenom;
          this.ClientBoard.saveToLocalStorage(); // Enregistrer les données dans le stockage local
          this.router.navigate(['def']);
          // Perform further actions or redirect the user
        } else {
          // Client not found, handle sign-in failure
          console.log('Client not found');
          // Display an error message or perform other actions
        }
      },
      (error) => {
        // Handle the error
        console.error('Error retrieving clients:', error);
        // Display an error message or perform other error handling
      }
    );
  //  console.log(this.user)

  }
}
