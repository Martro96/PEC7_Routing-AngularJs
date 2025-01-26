import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../components/user/user-interface';
import { map } from 'rxjs/operators';

export interface RegisterResponse {
  token: string;
  msg: string;
}

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
    return this.http.post<any>('http://localhost:3000/api/user/login', payload); 
  }
  

  register(username: string, password: string) {
    const body = { username, password };
    return this.http.post<RegisterResponse>('http://localhost:3000/api/user/register', body); 
  }
  findUserByEmail(email: string): Observable<UserInterface | undefined> {
    return this.http.get<UserInterface[]>(`${this.API_URL}/users?email=${email}`).pipe(
      map((users) => users[0])
    )
  }


   // Método para verificar si el usuario está autenticado
   isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
  }
  // Obtener el token del almacenamiento local
  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
