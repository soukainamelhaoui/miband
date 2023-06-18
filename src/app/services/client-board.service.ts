import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientBoardService {
  public nom!: string;
  public prenom!: string;

  constructor() { }
}
