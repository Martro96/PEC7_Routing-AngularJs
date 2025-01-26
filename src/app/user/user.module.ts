import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importamos RouterModule para usar rutas
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([  // Definimos las rutas hijas
      { path: '', component: UserComponent }, // Ruta predeterminada para el módulo de usuario
    ]),
  ],
})
export class UserModule {}
