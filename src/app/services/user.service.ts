import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  datiUtente = new ReplaySubject();

  apiBaseUrl = 'api/users';


  constructor(private http: HttpClient) { }

  saveUsers(User: any){
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, User);
  }
}
