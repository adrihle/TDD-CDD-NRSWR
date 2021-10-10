# MASMOVIL - DOCTOR GO

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

# COMO USAR

npm run dev ---> Para arrancar en local

npm run build ---> para crear la build de despliegue

npm run lint ---> revisado de codigo

npm run type-check ---> comprobacion de typescript

# DIAGRAMAS EXPLICATIVOS ARQUITECTURA

- En la carpeta _DOC se podran encontrar diagramas explicativos sobre los flujos definidos en la arquitectura

# DIRECTIVAS DEL PROYECTO

SE UTILIZA COMO DIRECTIVA PRINCIPAL EN LA ARQUITECTURA DE COMPONENTES --> https://www.componentdriven.org/

La arquitectura de carpetas sigue un modelo streamer de transferencia de datos y componentes:

- Desde SSR fetcheamos datos (services): el target de estos files es el de hacer peticiones http y controlar la respuesta y situaciones de errores

- Con los datos de entrada, se transformar a la estructura de las vistas (pipes): estos files tienen como objetivo adaptar la estructura de datos entrante a la que necesita la app

- Los datos se cargan en las paginas (pages): estas paginas se encargan de cargar datos y distribuirla entre los containers que la forman

- Cada pagina esta compuesta de containers (containers): el objetivo es hacer un split del codigo frontal para su facilidad de manejo

- Cada containers esta compuesto de components (components): estos components por lo general son la material prima para crear containers y normalmente suele ser el shape mas basico de maquetacion

- Cada page/containers/component debe tener una interfaz de entrada (interfaces): estos archivos seran los responsables de definir la estructura de datos que utiliza cada elemento de maquetacion.

- En desarrollo se usan mocks, que seran ejemplos dummies de la informacion que necesita la mquetacion (mocks): estos mocks se sirven de las interfaces del componente para construir objetos dummies que representen la informacion que consume el maquetado

- Para estilos generales se usa la carpeta styles, el proyecto esta preparado para trabajar con css, sass, o scss, cada componente utiliza el estilado de nextjs con modulos acotando el scope, estos se alojan con el mismo component/container

- Para funciones generales y de amplio uso (helpers)

- Para variables que dependan del entorno de ejecucion (environment): se distinguen las variables
de los distintos entornos dependiendo de su extension

- Para datos que se comportan entre diferentes paginas/vistas (contexts): esto añade una capa adicional de datos para compartir entre paginas


- services --> pipes --> page --> containers --> components --> render

Es importante no añadi mas de 3 niveles de indexacion a las vistas para la facilidad de depuracion
Cada archivo correspondiente a las categorias mencionadas arriba se nombraran con una extension adicional con el nombre de la categoria de archivo a trabajar:

component ---> button.component.tsx

estilos ---> button.module.scss

interfaz ---> button.interface.ts

mock ---> button.mock.ts

pipe ---> button.pipe.ts

service ---> button.service.ts


Todos exepto las paginas, porque su estructura de nombres se usa para el routing.

# EJEMPLOS INCLUIDOS

En este mismo boilerplate, tenemos ejemplos de:

- Renderizado SSR estatico y dinamico

- Navegacion estatica y dinamica

- LLamada a servicios desde SSR

- Renderizado de propiedades desde Server y Client

- Almacenamiento compartido de informacion con contextos

- Uso tanto de estilos embebidos, con hojas de estilos generales, con scope limitado, y con CSS IN JS (en forma de style jsx)

- Ejemplo de cambio de idioma en la web

- Integracion de componentes generales como navbar o footer

- Renderizado optimizado de imaganes con el tag de next Image

- Mocks de testeo para maquetacion y funciones

# ESTILOS GLOBALES CSS RULES

- ._xxx => clases globales y tipografias

- .__xxx => clases de grid y contenedores

- .___xxx => animaciones

# NOMENCLATURA COMPONENTES Y DEPENDENCIAS DEL MISMO

La nomenclatura para los nombres de variables y funciones seguiran esta nomenclatura basica.

- nombre del componente: TabCard

- nombre de la interfaz: iTabCard

- nombre del objeto de informacion: tabCardInfo
