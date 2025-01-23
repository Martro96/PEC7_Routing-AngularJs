import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
//import { ArticleListComponent } from './components/article-list/article-list.component';
//import { ArticleNewTemplateComponent } from './components/article-new-template/article-new-template.component'; 
//import { ArticleNewReactiveComponent } from './components/article-new-reactive/article-new-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule, 
    NavbarComponent,
    RouterModule,
    // ArticleListComponent, 
    // ArticleNewTemplateComponent, 
    // ArticleNewReactiveComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';

  // currentView: string = 'articles'; Eliminamos esto porque ahora trabajamos por routing
  // changeView(view: string) {
  //   this.currentView = view;
  // }

}
