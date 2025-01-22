import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private authToken: string | null = null;

  constructor() { }

  //Aquí los métodos de lo que podrá hacer un token (generarse - set y obtener-get)
  setToken(token: string):void {
    this.authToken = token;
  }
  getToken(): string | null {  
    return this.authToken;
  }

  //Con isAuthenticated confirmamos si el usuario está autentificado
  isAuthenticated():boolean {
    return !!this.authToken; //¿no debería confirmarse con un if si está o no autentificado, y dar ok o generar error? No sé qué significa el !!
  }
}
