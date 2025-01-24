import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, output } from '@angular/core';
import { Article } from './article-item.interface';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { Router } from '@angular/router';

export interface ArticleQuantityChange {
  article: Article;
  change: number; 
}

@Component({
  selector: 'app-article-item',
  standalone: true, 
  imports: [CommonModule, DefaultImagePipe], 
  templateUrl: './article-item.component.html', 
  styleUrls: ['./article-item.component.css'], 
  encapsulation: ViewEncapsulation.Emulated, 
  changeDetection: ChangeDetectionStrategy.OnPush

})


export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();
  @Output() delete = new EventEmitter<Article>();

  constructor(private router: Router) {}
  
  onDelete(): void {
    this.delete.emit(this.article);
  }
  ngOnInit() {
    console.log('ArticleItemComponent: ngOnInit - Artículo recibido:', this.article);
  }

  increaseQuantity(): void {
    console.log('ArticleItemComponent: increaseQuantity');
    if (this.article) {
      this.quantityChange.emit({ article: this.article, change: 1 });
    }
  }
  decreaseQuantity(): void {
    console.log('ArticleItemComponent: decreaseQuantity'); 
    if (this.article && this.article.quantityInCart > 0) {
      this.quantityChange.emit({ article: this.article, change: -1 });
    }
  }
  navigateToDetail(): void {
    this.router.navigate(['/article', this.article.id]);
  }

  addToCart(): void {
    // Lógica para añadir al carrito 
    console.log(`${this.article.name} añadido al carrito`);
  }

}
