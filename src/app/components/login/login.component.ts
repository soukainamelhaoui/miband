import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  user:User = new User();
  
  constructor(){

  }
 

  login() {

    // this.http.post('/api/login', { username: this.username, password: this.password })
    //   .subscribe(response => {
    //     // Handle successful login
    //   }, error => {
    //     // Handle login error
    //   });

   console.log(this.user)

  }
}
