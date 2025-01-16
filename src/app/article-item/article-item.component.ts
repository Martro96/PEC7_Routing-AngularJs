import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, output } from '@angular/core';
import { Article } from './article-item.interface';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

export interface ArticleQuantityChange {
  article: Article;
  change: number; // Incremento o decremento
}

@Component({
  selector: 'app-article-item',
  standalone: true, // Es un componente independiente
  imports: [CommonModule, DefaultImagePipe
    ], 
  templateUrl: './article-item.component.html', // Se mantiene el template externo
  styleUrls: ['./article-item.component.css'], // Se mantienen los estilos externos
  encapsulation: ViewEncapsulation.Emulated, // Encapsulación para estilos independientes
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();
  @Output() delete = new EventEmitter<Article>();

  onDelete(): void {
    this.delete.emit(this.article);
  }
  ngOnInit() {
    console.log('Artículo recibido:', this.article);
  }

  increaseQuantity(): void {
    if (this.article) {
      this.quantityChange.emit({ article: this.article, change: 1 });
    }
  }
  decreaseQuantity(): void {
    if (this.article && this.article.quantityInCart > 0) {
      this.quantityChange.emit({ article: this.article, change: -1 });
    }
  }

}
