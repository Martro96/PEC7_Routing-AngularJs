import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {
  private cachedURLs = new Set<string>();

  transform(imageUrl: string, fallbackURL: string = 'assets/images/default-image.jpg'): string {
    return imageUrl?.trim() ? imageUrl : fallbackURL;
  }

}
