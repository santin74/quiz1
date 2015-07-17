
1.- Crear un repositorio en Github donde subir el proyecto que se les pide desarrollar en los siguientes apartados de esta práctica.

2.- El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos en las transparencias de clase. No se permite clonar el repositorio oficial de la asignatura que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

npm install express-generator@4.9.0
e:\Users\Santi\Documents\Proyectos\GitHub>node_modules\.bin\express.cmd  --ejs quiz1
E:\Users\Santi\Documents\Proyectos\GitHub\quiz1> npm install


3.- Además se deben añadir los siguientes cambios a Quiz:

1) Modificar el servidor Quiz para añadir un enlace en el píe de página <footer> del marco de las páginas renderizadas que apunte a la página de su proyecto en GitHub.

2) Modificar el servidor Quiz para que sirva una nueva página con los datos de los autores de la práctica. Este desarrollo se realizará en una rama llamada créditos.
	a)Cree la rama creditos y
	b)cámbiese a ella para hacer el desarrollo pedido en este apartado.
	c)Crear un nuevo enlace en la barra de navegación que apunte a la página de créditos. La ruta de acceso a esta página debe ser /author.

  d) Modifique el router (routers/index.js) para que atienda las peticiones "GET /author" y sirva una nueva vista views/author.ejs con los datos de los autores o autor de la página, mostrando el nombre de los autores, su fotografía y un pequeño video (opcional) de 30 seg.

4.- Cuando se haya terminado este desarrollo, integrelo en la rama master, y súbalo a GitHub.

5.- Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar allí el servidor desarrollado en esta práctica.

Se deben seguir los mismos pasos explicados en las transparencias para realizar el despliegue.

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

