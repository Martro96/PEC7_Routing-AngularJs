import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  authStatus: boolean = false; 

  constructor(private router: Router) {}
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = localStorage.getItem('user');
      this.authStatus = !!user;  // Si el usuario está en localStorage, se considera autenticado
    }
  }
  checkAuthStatus(): void {
    if (typeof window !== 'undefined') {
      const isAuthenticated = !!localStorage.getItem('authToken');
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}