import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importo esto para usar *ngIf
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleNewTemplateComponent } from './components/article-new-template/article-new-template.component'; 
import { ArticleNewReactiveComponent } from './components/article-new-reactive/article-new-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule, // Importo esto para usar *ngIf
    ArticleListComponent, 
    NavbarComponent, 
    ArticleNewTemplateComponent, 
    ArticleNewReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';

  // Estado para gestionar la vista actual
  currentView: string = 'articles'; // Vista por defecto

  // Método para cambiar la vista
  changeView(view: string) {
    this.currentView = view;
  }

}
