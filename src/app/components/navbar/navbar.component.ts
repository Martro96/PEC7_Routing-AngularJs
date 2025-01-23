import { Component, } from '@angular/core'; //Quito EventEmitter y Output porque usamos routerLink
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuCollapsed = true;

  toggleMenu(){
    this.isMenuCollapsed =!this.isMenuCollapsed;
  }
}
