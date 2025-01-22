// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { articleAppInterceptor } from './interceptors/article-app.interceptor';

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}



import { provideRouter, Routes } from "@angular/router";
import { ArticleDetailComponent } from "./components/article-detail/article-detail.component";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { articleAppInterceptor } from "./interceptors/article-app.interceptor";

export const routes: Routes = [
  { path: 'article/:id', component: ArticleDetailComponent},
  { path: '', component: ArticleDetailComponent},
];

export const appConfig = [
  provideRouter(routes),
  provideHttpClient(withInterceptors([articleAppInterceptor])),
];