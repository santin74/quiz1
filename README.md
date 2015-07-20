
1.- Crear un repositorio en Github donde subir el proyecto que se les pide desarrollar en los siguientes apartados de esta práctica.
<<<<<<< HEAD
	Creo
	https://github.com/santin74/Quiz
	(por alguna mal función después de instalar heroku toolbelt, no puedo publicar mis commits aquí, obteniendo siempre error! p.e.:
	https://github.com/santin74/Quiz/commit/bc5079215a1d9f4054d57555b4dafd75b471afa1
	Más adelante, añadiré un nuevo git remote origin sobre quiz1
	)
2.- El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos en las transparencias de clase. No se permite clonar el repositorio oficial de la asignatura que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

	npm install express-generator@4.9.0
	e:\Users\Santi\Documents\Proyectos\GitHub>node_modules\.bin\express.cmd  --ejs quiz1
	E:\Users\Santi\Documents\Proyectos\GitHub\quiz1> npm install
	E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>npm start
	Se aprecia el fuente en
	https://github.com/santin74/quiz1
=======
Creo
https://github.com/santin74/Quiz
(por alguna mal función después de instalar heroku toolbelt, no puedo publicar mis commits aquí, obteniendo siempre error! p.e.:
https://github.com/santin74/Quiz/commit/bc5079215a1d9f4054d57555b4dafd75b471afa1
Más adelante, añadiré un nuevo git remote origin sobre quiz1
)
2.- El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos en las transparencias de clase. No se permite clonar el repositorio oficial de la asignatura que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

npm install express-generator@4.9.0
e:\Users\Santi\Documents\Proyectos\GitHub>node_modules\.bin\express.cmd  --ejs quiz1
E:\Users\Santi\Documents\Proyectos\GitHub\quiz1> npm install
E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>npm start
Se aprecia el fuente en
https://github.com/santin74/quiz1
>>>>>>> origin/master

3.- Además se deben añadir los siguientes cambios a Quiz:

1) Modificar el servidor Quiz para añadir un enlace en el píe de página <footer> del marco de las páginas renderizadas que apunte a la página de su proyecto en GitHub.

2) Modificar el servidor Quiz para que sirva una nueva página con los datos de los autores de la práctica. Este desarrollo se realizará en una rama llamada créditos.
	a)Cree la rama creditos y
		 *  git branch creditos
	b)cámbiese a ella para hacer el desarrollo pedido en este apartado.
		* git checkout creditos
	c)Crear un nuevo enlace
		   * en la barra de navegación que apunte a la página de créditos. La ruta de acceso a esta página debe ser /author.

  d) Modifique el router (routers/index.js) para que atienda las peticiones "GET /author" y sirva una nueva vista views/author.ejs con los datos de los autores o autor de la página, mostrando el nombre de los autores, su fotografía y un pequeño video (opcional) de 30 seg.
     * git add .
     * git commit -m "con Creditos de autor"
4.- Cuando se haya terminado este desarrollo, integrelo en la rama master, y súbalo a GitHub.
		* git checkout master
		* git merge creditos
Updating 08ca708..6eb8901
Fast-forward
 README.md                      | 3 ++-
 controllers/quiz_controller.js | 6 +++++-
 routes/index.js                | 2 ++
 views/author.ejs               | 5 +++++
 views/layout.ejs               | 7 +++++--
 5 files changed, 19 insertions(+), 4 deletions(-)
 create mode 100644 views/author.ejs
	* git push

5.- Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar allí el servidor desarrollado en esta práctica.
	*    E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>heroku create
	Creating fathomless-mountain-9742... done, stack is cedar-14
	https://fathomless-mountain-9742.herokuapp.com/ | https://git.heroku.com/fathomless-mountain-9742.git
	Git remote heroku added

	* Renombro
	*    	    E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>heroku apps:rename quiz-san-2015

Se deben seguir los mismos pasos explicados en las transparencias para realizar el despliegue.
* obtenemos  versiones para actualizar package.json
E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>node --version
v0.12.5

E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>npm --version
2.11.2

<<<<<<< HEAD
* añadimos Procfile y subimos al repositorio de heroku   : git status
=======
* añadimos Procfile y subimos al repositorio de heroku
>>>>>>> origin/master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   Procfile
        modified:   README.md
        modified:   package.json
E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>git push heroku master
Counting objects: 72, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (64/64), done.
Writing objects: 100% (72/72), 11.12 KiB | 0 bytes/s, done.
Total 72 (delta 22), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NPM_CONFIG_PRODUCTION=true
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
remote:        - node_modules (not cached - skipping)
remote:
remote: -----> Building dependencies
remote:        Pruning any extraneous modules
remote:        Installing node modules (package.json)
remote:        debug@2.0.0 node_modules/debug
remote:        └── ms@0.6.2
remote:
remote:        cookie-parser@1.3.5 node_modules/cookie-parser
remote:        ├── cookie@0.1.3
remote:        └── cookie-signature@1.0.6
remote:
remote:        express-partials@0.3.0 node_modules/express-partials
remote:
remote:        ejs@0.8.8 node_modules/ejs
remote:
remote:        morgan@1.3.2 node_modules/morgan
remote:        ├── basic-auth@1.0.0
remote:        ├── depd@0.4.5
remote:        └── on-finished@2.1.0 (ee-first@1.0.5)
remote:
remote:        serve-favicon@2.1.7 node_modules/serve-favicon
remote:        ├── ms@0.6.2
remote:        ├── fresh@0.2.4
remote:        └── etag@1.5.1 (crc@3.2.1)
remote:
remote:        express@4.9.8 node_modules/express
remote:        ├── fresh@0.2.4
remote:        ├── merge-descriptors@0.0.2
remote:        ├── media-typer@0.3.0
remote:        ├── utils-merge@1.0.0
remote:        ├── cookie@0.1.2
remote:        ├── range-parser@1.0.2
remote:        ├── escape-html@1.0.1
remote:        ├── vary@1.0.1
remote:        ├── cookie-signature@1.0.5
remote:        ├── finalhandler@0.2.0
remote:        ├── methods@1.1.0
remote:        ├── parseurl@1.3.0
remote:        ├── serve-static@1.6.5
remote:        ├── path-to-regexp@0.1.3
remote:        ├── depd@0.4.5
remote:        ├── qs@2.2.4
remote:        ├── on-finished@2.1.1 (ee-first@1.1.0)
remote:        ├── etag@1.4.0 (crc@3.0.0)
remote:        ├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
remote:        ├── send@0.9.3 (ms@0.6.2, destroy@1.0.3, on-finished@2.1.0, mime@
1.2.11)
remote:        ├── type-is@1.5.7 (mime-types@2.0.14)
remote:        └── accepts@1.1.4 (negotiator@0.4.9, mime-types@2.0.14)
remote:
remote:        body-parser@1.8.4 node_modules/body-parser
remote:        ├── bytes@1.0.0
remote:        ├── media-typer@0.3.0
remote:        ├── raw-body@1.3.0
remote:        ├── depd@0.4.5
remote:        ├── on-finished@2.1.0 (ee-first@1.0.5)
remote:        ├── qs@2.2.4
remote:        ├── iconv-lite@0.4.4
remote:        └── type-is@1.5.7 (mime-types@2.0.14)
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
remote:        └── serve-favicon@2.1.7
remote:
remote: -----> Discovering process types
remote:        Procfile declares types -> web
remote:
remote: -----> Compressing... done, 9.9MB
remote: -----> Launching... done, v3
remote:        https://quiz-san-2015.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy.... done.

Warning: Your console font probably doesn't support Unicode. If you experience s
trange characters in the output, consider switching to a TrueType font such as L
ucida Console!
To https://git.heroku.com/quiz-san-2015.git
 * [new branch]      master -> master

6.-Actualice GitHub con los cambios realizados en este apartado.
	* Aquí tengo problemas encontrando siempre error 404 al intentar Sincronizar/publicar e ir al commit en Github.

El proyecto desarrollado en esta practica, junto con todas las modificaciones añadidas, debe subirse al repositorio creado en Github por los alumnos.
	* Creo un nuevo repositorio (quiz1) para poder continuar avanzando.

Entregar en el texto de la entrega a MiriadaX

1) El URL al despliegue en Heroku como un enlace clicable.
http://quiz-san-2015.herokuapp.com
2) El URL al proyecto en GITHUB como un enlace clicable.
https://github.com/santin74/quiz1

<<<<<<< HEAD


=======
>>>>>>> origin/master
