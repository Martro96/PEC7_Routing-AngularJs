import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { UserStoreService } from '../services/user-store.service';


export const articleAppInterceptor: HttpInterceptorFn = (req, next) => {
  const userStore = inject(UserStoreService);
  const token = userStore.getToken(); //Primero obtenemos el token cin getToken()

  if (token) { //Si lo recibimos
    const authReq = req.clone({ //creamos una constante de petición de autentificación y la clonamos a la req inicial que recibimos antes ya que la inicial es inmutable
      setHeaders: { //una vez clonado, podemos editarla y aplicarla unos encabezados y cambiar el cuerpo
        Authorization: `Bearer ${token}`, //Aquí añadimos un encabezado para la autenticación. "Bearer" es un estándar para enviar tokens de acceso.
      },
    });

    return next(authReq); //continuamos con la solicitud clonada
  }

  return next(req); //finalizamos con la solicitud original sin modificar
}

