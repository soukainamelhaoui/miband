import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  photo = "assets/docteur.jpg"
  name = "Mr.docteur"
  constructor(private router : Router){}

getheartbeats(){
  this.router.navigate(["/heartbeats"])
}
getclients(){
  this.router.navigate(["/clients"])
}
getCreateClient() {
  this.router.navigate(["/CreateClient"])
}
getclientsByid(){
  this.router.navigate(["/clients/:id"])
}
}
