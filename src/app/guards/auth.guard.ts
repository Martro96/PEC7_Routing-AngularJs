import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (!isAuthenticated) {
    router.navigate(['/login']); // Usamos Router para redirigir sin recargar la página
    return false;
  }
  
  return true;
};
