import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_ROLE_KEY = 'userRole';

  constructor() { }

  setIsAdmin(value: boolean) {
    localStorage.setItem(this.USER_ROLE_KEY, value ? 'admin' : 'user');
  }

  isAdminUser(): boolean {
    return this.getUserRole() === 'admin';
  }

  private getUserRole(): string | null {
    return localStorage.getItem(this.USER_ROLE_KEY);
  }
  
}
