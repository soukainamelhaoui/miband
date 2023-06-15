import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  
  constructor(private http: HttpClient,private router: Router){

  }

  ngOnInit() {}
 

  login() {
    this.http.get<User[]>(`http://154.49.137.28:8080/listClients`).subscribe(
      (response: any[]) => {
        const client = response.find((c) => c.mail === this.user.email && c.mac === this.user.mac);
        if (client) {
          // Client found, handle successful sign-in
          console.log('Client found:', client);
          this.router.navigate(['/clients', client.id]);
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
