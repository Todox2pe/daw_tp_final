Autor: Manuel A. Camino - 2020

# Introduccion
La presente aplicación web es un trabajo practico final para la materia "Desarrollo de Aplicaciones Web" de la especializacion en Internet de las Cosas (CEIoT) de la Facultad de Ingenieria de la Universidad de Buenos Aires.

# Descripción
La aplicación esta compuesta de un front-end (Typescript compilado a Javascript) y un back-end (Node.js + MySql). Su arquitectura es SPA (Single Page Application) con lo cual todos los requests se realizan mediante XMLHTTPRequest al back-end con la finalidad de no volver a cargar la pagina.

El back-end contiene queries SQL ya pre-definidos en caso de que pases ![Roberto Tablas](https://imgs.xkcd.com/comics/exploits_of_a_mom.png) y quiera generarnos un mal dia.

# Correr la aplicación
Una vez realizado el pull y haber descargado la aplicacion, nos ubicamos en el directorio raiz y ejecutamos el siguiente comando:
```sh
docker-compose up
```

# Agradecimientos
A los profesores:
- Ernesto Gigliotti
- Brian Ducca
- Agustin Bassi
A mis compañeros de cursada por haberse tomado el tiempo para ayudarme (Y mas por la paciencia)

# Contribuir
Para contribuir realizar un pull request con las sugerencias.

# Licencia
GPL