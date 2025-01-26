import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  constructor() { }

  // Establecer el token en el localStorage
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Obtener el token desde el localStorage
  getToken(): string | null {  
    return localStorage.getItem('authToken'); // Devolver el token desde localStorage
  }

  // Confirmar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken(); // Devuelve true si el token está presente
  }

  // Eliminar el token del localStorage
  clearToken(): void {
    localStorage.removeItem('authToken');
  }
}
