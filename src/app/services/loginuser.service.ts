import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(private http: HttpClient){}

  loginUser(user:User):Observable<object>{
      
    }
  
}
