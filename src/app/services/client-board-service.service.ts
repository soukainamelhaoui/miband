import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientBoardServiceService {
  public nom!: string;
  public prenom!: string;

  constructor() { }
}
