import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

export const routes: Routes = [
    { path: 'article/:id', component: ArticleDetailComponent},
    { path: '', component: ArticleDetailComponent 
       }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
