import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomeComponent } from "./pages/home/home.component";
import { authGuard } from "./guards/auth.guard";

export const routes: Routes = [ 
  { path: '', component: HomeComponent, canActivate: [authGuard] }, // Nueva página de inicio
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'article/list', component: ArticleListComponent, canActivate: [authGuard] },
  // { path: 'article/create', component: ArticleNewReactiveComponent, canActivate: [authGuard] }, 
  // { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) }, 
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirigir a la página de inicio si la ruta no coincide con ninguna de las anteriores
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

