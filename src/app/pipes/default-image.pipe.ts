import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(imageUrl: string, fallbackURL: string = 'PEC6_Ej_Prac\ecommerce\src\app\assets\images\default-image.jpg'): string {
    return imageUrl?.trim() ? imageUrl : fallbackURL;
  }

}
