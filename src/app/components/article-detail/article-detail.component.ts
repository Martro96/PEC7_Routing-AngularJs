import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../article-item/article-item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  imports: [CommonModule],
  standalone: true,

})
export class ArticleDetailComponent implements OnInit {
  article?: Article;

  constructor(
    private route: ActivatedRoute, // Para acceder a los parámetros de la URL
    private router: Router,        // Para redirigir al usuario
    private articleService: ArticleService // Para interactuar con los datos
  ) {}

  ngOnInit(): void {
    const articleId = Number(this.route.snapshot.paramMap.get('id'));
    if (articleId) {
      this.loadArticle(articleId);
    } else {
      console.error('ID del artículo no válido.');
    }
  }

  loadArticle(articleId: number): void {
    this.articleService.getArticles().subscribe({
      next: (articles) => {
        const foundArticle = articles.find((a) => a.id === articleId);
        if (foundArticle) {
          this.article = foundArticle;
        } else {
          console.error('Artículo no encontrado.');
        }
      },
      error: () => {
        console.error('Error al cargar el artículo.');
      },
    });
  }

  increaseQuantity(): void {
    if (this.article) {  // Verificación si article no es undefined
      const previousQuantity = this.article.quantityInCart;
      this.article.quantityInCart++;
      this.articleService.onQuantityChange(this.article.id, 1).subscribe({
        next: () => {
          console.log(`Cantidad aumentada: de ${previousQuantity} a ${this.article?.quantityInCart}`);
        },
        error: (err) => console.error('Error al aumentar la cantidad:', err),
      });
    }
  }
  
  decreaseQuantity(): void {
    if (this.article && this.article.quantityInCart > 0) {  // Verificación si article no es undefined
      const previousQuantity = this.article.quantityInCart;
      this.article.quantityInCart--;
      this.articleService.onQuantityChange(this.article.id, -1).subscribe({
        next: () => {
          console.log(`Cantidad disminuida: de ${previousQuantity} a ${this.article?.quantityInCart}`);
        },
        error: (err) => console.error('Error al disminuir la cantidad:', err),
      });
    }
  }
  

  onDelete(): void {
    if (this.article) {
      this.articleService.deleteArticle(this.article.id).subscribe(() => {
        alert('Artículo eliminado.');
        this.router.navigate(['/']); // Redirige al listado principal
      });
    }
  }
}
