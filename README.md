modulo 7

Añadir a Quiz un Buscador de Preguntas
1.- Se pide añadir un formulario de búsqueda en la página que muestra la lista de preguntas (/quizes).
	* El formulario tendrá un campo para
	* 		introducir el texto a buscar,
	* 		y un botón enviar (submit).
	*	El resultado de la búsqueda contendrá todas las preguntas que contengan el texto introducido en el formulario ordenadas alfabéticamente.

2.-Este desarrollo debe realizarse en una rama llamada busquedas, la cual se mezclara con la rama master una vez se haya terminado esta práctica.
----------
$ git branch
  busquedas
  creditos
  heroku/master
* master
----------
3.-La ruta de la lista de preguntas podrá llevar una query opcional con el texto a buscar, quedando la primitiva del interfaz REST así:

GET  /quizes?search=texto_a_buscar

Esta primitiva devolverá la página con el listado de todas las preguntas que contengan el texto indicado, ordenadas alfabeticamente.

* El formulario de búsqueda deberá ser de tipo GET y enviar un parámetro "search" con el texto (string) buscado.
   De esta forma, si en el formulario se escribe Italia, al pulsar el botón de submit, se enviará al servidor: GET /quizes?search=Italia.
* Para implementar esta funcionalidad hay que modificar la acción index del controlador (controllers/quiz_controller.js)
  para que busque las preguntas que contienen el texto especificado en la query.

* Para realizar la búsqueda de las preguntas en la base de datos, use la función findAll de sequelize.
  * Debe usar el operador LIKE y el comodín % en la condición WHERE. Debe usar un formato como este:

findAll({where: ["pregunta like ?", search]}]

No olvide delimitar el string contenido en search con el comodín % antes y después y cambie también los espacios en blanco por %.
De esta forma, si busca "uno dos" ("%uno%dos%"), mostrará todas las preguntas que tengan "uno" seguido de "dos",
independientemente de lo que haya entre "uno" y "dos".

* Finalmente, despliegue en heroku su practica y suba los cambios a GitHub.
---------------------------------------------------
$ git push heroku master
Counting objects: 42, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (24/24), done.
Writing objects: 100% (30/30), 3.77 KiB | 0 bytes/s, done.
Total 30 (delta 12), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NPM_CONFIG_PRODUCTION=true
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  0.12.5
remote:        engines.npm (package.json):   2.11.2
remote:
remote:        Downloading and installing node 0.12.5...
remote:        npm 2.11.2 already installed with node
remote:
remote: -----> Restoring cache
remote:        Loading 1 from cacheDirectories (default):
remote:        - node_modules
remote:
remote: -----> Building dependencies
remote:        Pruning any extraneous modules
remote:        Installing node modules (package.json)
remote:
remote: -----> Caching build
remote:        Clearing previous node cache
remote:        Saving 1 cacheDirectories (default):
remote:        - node_modules
remote:
remote: -----> Build succeeded!
remote:        ├── body-parser@1.8.4
remote:        ├── cookie-parser@1.3.5
remote:        ├── debug@2.0.0
remote:        ├── ejs@0.8.8
remote:        ├── express@4.9.8
remote:        ├── express-partials@0.3.0
remote:        ├── morgan@1.3.2
remote:        ├── pg@4.4.0
remote:        ├── pg-hstore@2.3.2
remote:        ├── sequelize@1.7.11
remote:        └── serve-favicon@2.1.7
remote:
remote: -----> Discovering process types
remote:        Procfile declares types -> web
remote:
remote: -----> Compressing... done, 11.4MB
remote: -----> Launching... done, v9
remote:        https://quiz7-san-2015.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy.... done.

Warning: Your console font probably doesn't support Unicode. If you experience s
trange characters in the output, consider switching to a TrueType font such as L
ucida Console!
To https://git.heroku.com/quiz7-san-2015.git
   4bba2fd..d2a15ac  master -> master

Santi@DV7 /e/Users/Santi/Documents/Proyectos/GitHub/quiz1 (master)
---------------------------------------------------
Entrega en MiriadaX
1) Subir un fichero de texto que contenga el URL donde se está ejecutando su práctica en Heroku,
https://git.heroku.com/quiz7-san-2015.git
2) y el URL a la página de GitHub que aloja este desarrollo.
https://github.com/santin74/quiz1/tree/busquedas