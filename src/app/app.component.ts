import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'miband';

  ngOnInit() {
    // Code à exécuter lors de l'initialisation du composant
    console.log("hi")
  }
}
