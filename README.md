
1.- Crear un repositorio en Github donde subir el proyecto que se les pide desarrollar en los siguientes apartados de esta práctica.

2.- El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos en las transparencias de clase. No se permite clonar el repositorio oficial de la asignatura que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

npm install express-generator@4.9.0
e:\Users\Santi\Documents\Proyectos\GitHub>node_modules\.bin\express.cmd  --ejs quiz1
E:\Users\Santi\Documents\Proyectos\GitHub\quiz1> npm install
E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>npm start


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

5.- Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar allí el servidor desarrollado en esta práctica.
    E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>heroku create
Creating fathomless-mountain-9742... done, stack is cedar-14
https://fathomless-mountain-9742.herokuapp.com/ | https://git.heroku.com/fathoml
ess-mountain-9742.git
Git remote heroku added

Se deben seguir los mismos pasos explicados en las transparencias para realizar el despliegue.
E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>node --version
v0.12.5

E:\Users\Santi\Documents\Proyectos\GitHub\quiz1>npm --version
2.11.2

6.-Actualice GitHub con los cambios realizados en este apartado.

El proyecto desarrollado en esta practica, junto con todas las modificaciones añadidas, debe subirse al repositorio creado en Github por los alumnos.

Entregar en el texto de la entrega a MiriadaX

1) El URL al despliegue en Heroku como un enlace clicable.
2) El URL al proyecto en GITHUB como un enlace clicable.



-------------------------------------------------
mod 5
Hacerse una cuenta en GITHUB con el nombre del participante.

Clonar el proyecto "random" del proyecto https://github.com/jquemada/random GITHUB.

Añadir al proyecto un tercer commit con los ficheros
	README.md (con una breve descripción) y
	LICENSE.md (con la licencia con que se distribuye -> adaptar una de otro proyecto en GITHUB que le parezca adecuada para distribuir su proyecto).

Subir a continuación el proyecto actualizado actualizado con el nuevo commit a su cuenta en GITHUB.

Entregar en el texto de la entrega a MiriadaX  el URL al proyecto subido a GITHUB como un enlace clicable.

