import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientBoardService } from 'src/app/services/client-board.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  photo = "assets/docteur.jpg"
  name = "Mr.docteur"
  constructor(private router: Router, private clientBoardService: ClientBoardService) {}

getheartbeats(){
  this.router.navigate(["/def/heartbeats"])
}
getclients(){
  this.router.navigate(["/def/clients"])
}
getCreateClient() {
  this.router.navigate(["/def/CreateClient"])
}
logout() {
  this.clientBoardService.clearLocalStorage(); // Clear local storage data
  this.router.navigate(['/login']); // Navigate to the login page
}
}
