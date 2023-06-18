import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ClientBoardService {
  public nom!: string;
  public prenom!: string;
  public mac!: string;
  public id!: string;

  constructor() {
    this.loadFromLocalStorage(); // Charger les données depuis le stockage local lors de l'initialisation du service
  }

  saveToLocalStorage() {
    localStorage.setItem('nom', this.nom);
    localStorage.setItem('prenom', this.prenom);
    localStorage.setItem('mac', this.mac);
    localStorage.setItem('id', this.id);
  }

  loadFromLocalStorage() {
    this.nom = localStorage.getItem('nom') || '';
    this.prenom = localStorage.getItem('prenom') || '';
    this.mac = localStorage.getItem('mac') || '';
    this.id = localStorage.getItem('id') || '';
  }
}
