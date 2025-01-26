import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from '../components/article-list/article-list.component'; 
import { ArticleNewReactiveComponent } from '../components/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from '../components/article-detail/article-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([ //Estas son las rutas que hemos quitado del archivo app.routes para que se carguen solo cuando se use este módulo en la app
      { path: 'list', component: ArticleListComponent },
      { path: 'create', component: ArticleNewReactiveComponent },
      { path: 'detail/:id', component: ArticleDetailComponent },
    ]),
  ],
})
export class ArticleModule {}
