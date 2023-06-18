import { Component,OnInit } from '@angular/core';
import { ClientBoardService } from 'src/app/services/client-board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public nom!: string;
  public prenom!: string;

  constructor(private ClientBoard: ClientBoardService) {}

  ngOnInit() {
    this.ClientBoard.loadFromLocalStorage();
    this.nom = this.ClientBoard.nom;
    this.prenom = this.ClientBoard.prenom;
  }

}
