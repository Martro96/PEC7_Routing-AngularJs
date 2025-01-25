import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { ArticleNewReactiveComponent } from "./components/article-new-reactive/article-new-reactive.component";
import { ArticleDetailComponent } from "./components/article-detail/article-detail.component";
import { HomeComponent } from "./pages/home/home.component";
import { provideHttpClient, withInterceptors } from "@angular/common/http"; // Importar HttpClientModule para usar HttpClient
import { articleAppInterceptor } from "./interceptors/article-app.interceptor"; // Importar interceptor para la app
import { authGuard } from "./guards/auth.guard";

export const routes: Routes = [ 
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Nueva página de inicio
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/list', component: ArticleListComponent },
  { path: 'article/create', component: ArticleNewReactiveComponent, canActivate: [authGuard] }, 
  { path: 'article/:id', component: ArticleDetailComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirigir a la página de inicio si la ruta no coincide con ninguna de las anteriores
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

