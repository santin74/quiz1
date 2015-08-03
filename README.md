modulo 8

Explicación de la tarea


Añadir a cada pregunta un índice temático
  -Se pide añadir un índice temático a cada pregunta introducida que diga si es una pregunta relativa a Humanidades, Ocio, Ciencia o Tecnología.

 - Para implementar esta funcionalidad habrá que  actualizar el modelo, introduciendo este nuevo campo en la tabla "Quiz" de preguntas.

*	Rehacemos bd sqlite para evitar:

	12:00:23 web.1  | Possibly unhandled SequelizeDatabaseError: SQLITE_ERROR: no such column: tematica

 * para poder utilizar foreman + vscode debugging, actualizamos Procfile
web: node --debug ./bin/www

Además habra que que actualizar los controladores

* create y edit

 y las vistas afectados por este cambio.
*new
*edit
*index
Se recomienda utilizar el elemento <select> de HTML en los formularios de creación y edición para enviar parámetros de una lista preseleccionada:

<select name="tema">
  <option value="otro" selected>Otro</option>
  <option value="humanidades">Humanidades</option>
  <option value="ocio">Ocio</option>
  <option value="ciencia">Ciencia</option>
  <option value="tecnologia">Tecnología</option>
</select>

* modifico _form.ejs para que marque selected' la temática almacenada en bd si la hay.

Una vez realizada, se deberá guardar una nueva versión (commit) con esta funcionalidad, la cual se desplegará en heroku y se subirá a GitHub.

Entrega en MiriadaX
Subir un fichero de texto que contenga
1) el URL donde ha desplegfado su práctica en Heroku,
https://quiz8-san-2015.herokuapp.com


2) y el URL a la página de GitHub que aloja este desarrollo.
https://github.com/santin74/quiz1/tree/IndiceTema
