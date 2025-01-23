// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { LoginComponent } from "./components/login/login.component";
// import { RegisterComponent } from "./components/register/register.component";
// import { ArticleListComponent } from "./components/article-list/article-list.component";
// import { ArticleNewReactiveComponent } from "./components/article-new-reactive/article-new-reactive.component";
// import { ArticleDetailComponent } from "./components/article-detail/article-detail.component";
// import { provideHttpClient, withInterceptors } from "@angular/common/http";
// import { articleAppInterceptor } from "./interceptors/article-app.interceptor";

// export const routes: Routes = [ 
//   { path: '', redirectTo: 'login', pathMatch: 'full' }, 
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'article/list', component: ArticleListComponent },
//   { path: 'article/create', component: ArticleNewReactiveComponent }, 
//   { path: 'article/:id', component: ArticleDetailComponent }, 
// ];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


// // export const appConfig = [
// //   provideRouter(routes),
// //   provideHttpClient(withInterceptors([articleAppInterceptor])),
// // ];

import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { ArticleNewReactiveComponent } from "./components/article-new-reactive/article-new-reactive.component";
import { ArticleDetailComponent } from "./components/article-detail/article-detail.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/list', component: ArticleListComponent },
  { path: 'article/create', component: ArticleNewReactiveComponent }, 
  { path: 'article/:id', component: ArticleDetailComponent }, 
];
