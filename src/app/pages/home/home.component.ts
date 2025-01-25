import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../components/article-item/article-item.interface';
import { ArticleItemComponent } from '../../components/article-item/article-item.component';
import { ArticleService } from '../../services/article.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}
  
  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }}
