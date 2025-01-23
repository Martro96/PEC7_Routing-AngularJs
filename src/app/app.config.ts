// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter, Routes } from '@angular/router';
// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { provideHttpClient, withFetch  } from '@angular/common/http';


// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideHttpClient(withFetch()), 
//     provideZoneChangeDetection({ eventCoalescing: true }), 
//     // provideRouter(routes), 
//     provideClientHydration(withEventReplay())],

// };
import { ApplicationConfig, provideRouter } from '@angular/core';
import { routes } from './app.routes'; // Aquí importas las rutas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Usas provideRouter para configurar las rutas
  ],
};

