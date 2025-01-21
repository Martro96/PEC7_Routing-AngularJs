import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../components/user/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.API_URL);
  }

  authenticate(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post<any>(`${this.API_URL}/authenticate`, payload);
  }

  create(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.API_URL}/users`, user);
  }
}
