# PEC 6 - Frameworks: Servicios en Angular

## Descripción

En esta práctica he trabajado con la creación de servicios en Angular, entendiendo su funcionamiento y cómo implementarlos en componentes. He aprendido el uso de RxJS, el cual es fundamental para manejar la comunicación asíncrona y reactiva entre los componentes. Además, se ha trabajado con el servicio HttpClient para realizar peticiones HTTP y cómo integrar interceptores y pipes en el flujo de datos de la aplicación.

## Ejercicios Realizados

### Ejercicio 1 – Preguntas Teóricas sobre Servicios Angular

Respondo a las preguntas teóricas sobre los componentes y servicios, la inyección de dependencias y `@Injectable`; los conceptos de la programación reactiva en RxJS, las diferencias entre Promesas y Observables y la funcionalidad de la tubería `async`

### Ejercicio 2 – Práctica – Servicios

1. **Creación del servicio `article-service`**:
   - He creado un servicio llamado `article-service` que se utiliza en los componentes `article-list` y `article-new-reactive`. Este servicio maneja la lógica relacionada con los artículos, incluyendo métodos como `getArticles()`, `changeQuantity()` y `create()`.

2. **Uso de Observables**:
   - He utilizado **observables** en los métodos del servicio y he hecho que los componentes utilicen **pipes** como `async` para manejar las respuestas de forma asíncrona y evitar suscripciones manuales.

3. **Registro del servicio con `providedIn`**:
   - El servicio se ha registrado correctamente utilizando el parámetro `providedIn` para asegurarnos de que Angular lo inyecte donde sea necesario.

4. **Respuestas a la teoría**:
   - He respondido a las preguntas teóricas sobre el uso de `@Injectable` y las diferentes opciones de `providedIn`, como `root`, `any`, y `platform`, explicando cuándo y por qué se utilizan.

### Ejercicio 3 – Preguntas Teóricas sobre Interceptores
Respondo a las preguntas teóricas sobre los interceptores y analizo la cadena de operadores de RxJS dada en el enunciado para entender su lógica. 

### Ejercicio 4 – Práctica – HttpClient

1. **Configuración del servidor y API**:
   - He configurado un servidor local para gestionar artículos mediante peticiones HTTP. El servidor permite realizar operaciones como obtener una lista de artículos, crear nuevos artículos y actualizar la cantidad de artículos en el carrito.

2. **Actualización del servicio para usar HttpClient**:
   - El servicio `article-service` ha sido modificado para realizar peticiones HTTP utilizando el servicio `HttpClient`. Además, he implementado una funcionalidad de búsqueda para filtrar artículos por nombre desde el frontend.

### Ejercicio 5 – Práctica – Pipes

1. **Uso de Pipes para formatear datos**:
   - He utilizado pipes para formatear el precio de los artículos a dos decimales y mostrar el símbolo de la moneda (€).

2. **Creación de un Pipe custom**:
   - Creé un pipe personalizado para mostrar una imagen por defecto en caso de que el campo `imageUrl` de un artículo estuviera vacío. Esto asegura que todos los artículos tengan una imagen representativa, incluso si la URL de la imagen está vacía.

## Dificultades y Mejoras

Durante el desarrollo de esta PEC, algunas de las dificultades principales fueron entender el concepto de programación reactiva y el uso de RxJS, especialmente con la gestión de Observables y operadores. Sin embargo, una vez comprendido el flujo de datos y cómo funcionan los operadores, el resto de la implementación fue más sencilla. 

También fue importante aprender cómo estructurar correctamente los servicios y cómo integrarlos con la API para realizar las peticiones HTTP de manera eficiente. Las mejoras realizadas fueron la optimización de los componentes para que la lógica se manejara completamente en los servicios, siguiendo las buenas prácticas de Angular.
#   P E C 7 _ R o u t i n g - A n g u l a r J s  
 