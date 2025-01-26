import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../components/article-item/article-item.interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly API_URL = 'http://localhost:3000/api/articles';
  private articlesSubject = new BehaviorSubject<Article[]>([]);
  articles$ = this.articlesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.API_URL).pipe(
      tap((articles: Article[]) => this.articlesSubject.next(articles)) // tap se utiliza para que cuando se obtienen los artículos, se emita este array al BehaviorSubject
    );
  }

  // create(article: Article): Observable<Article> {
  //   return this.http.post<Article>(this.API_URL, article);
  // }

  create(article: Article): void {
    // Verifica que el artículo tenga todos los campos necesarios
    this.http.post<Article>(`${this.API_URL}`, article).subscribe({
      next: (newArticle) => {
        console.log('Artículo añadido correctamente:', newArticle);
        const currentArticles = this.articlesSubject.getValue();
        this.articlesSubject.next([...currentArticles, newArticle]);
      },
      error: (error) => {
        console.error('Error al crear el artículo:', error);
      },
    });
  }
  
  deleteArticle(articleID: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${articleID}`);
  }

  onQuantityChange(articleID: number, change: number): Observable<Article> {
    console.log('ArticleService: onQuantityChange');
    return this.http.patch<Article>(`${this.API_URL}/${articleID}`, { 
      quantityChange: change,
      });
  }
}
