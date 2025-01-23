import { Component, } from '@angular/core'; //Quito EventEmitter y Output porque usamos routerLink

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //Elimino @Output() y EventEmitter porque usamos routerLink
  // @Output() viewChange = new EventEmitter<string>(); 
  // changeView(view: string) {
  //   this.viewChange.emit(view);
  // }
}
