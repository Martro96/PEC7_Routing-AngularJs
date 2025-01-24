import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../components/article-item/article-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly API_URL = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.API_URL);
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.API_URL, article);
  }

  deleteArticle(articleID: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${articleID}`);
  }

  onQuantityChange(articleID: number, changeInQuantity: number): Observable<Article> {
    console.log('ArticleService: onQuantityChange');
    return this.http.patch<Article>(`${this.API_URL}/${articleID}`, { changeInQuantity });
  }
}
