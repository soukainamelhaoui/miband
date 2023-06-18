import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ClientBoardService {
  public nom!: string;
  public prenom!: string;

  constructor() {
    this.loadFromLocalStorage(); // Charger les données depuis le stockage local lors de l'initialisation du service
  }

  saveToLocalStorage() {
    localStorage.setItem('nom', this.nom);
    localStorage.setItem('prenom', this.prenom);
  }

  loadFromLocalStorage() {
    this.nom = localStorage.getItem('nom') || '';
    this.prenom = localStorage.getItem('prenom') || '';
  }
}
