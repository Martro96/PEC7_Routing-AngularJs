import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { articleAppInterceptor } from './interceptors/article-app.interceptor';
import { DefaultImagePipe } from './pipes/default-image.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([articleAppInterceptor])
    ),
    DefaultImagePipe,
    
  ]
};