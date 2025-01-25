import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); //Usamos !! para convertir el valor de localStorage.getItem('authToken') en un booleano y saber si el token existe y es válido.
  if (!isAuthenticated) {
    window.location.href = '/login';
    return false;
  
  }
  return true;
};
