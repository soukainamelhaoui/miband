import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdmin = false;

  constructor() { }

  setIsAdmin(value: boolean) {
    this.isAdmin = value;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
}
