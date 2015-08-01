var models = require ('../models/models.js');
var q= require('querystring');

/* GET /quizes/question
exports.question= function (req,res ) {
	models.Quiz.findAll().success(function (quiz) {
    res.render('quizes/question', {pregunta : quiz[0].pregunta});
 })
};
*/

exports.load = function (req,res,next, quizId) {
	models.Quiz.find(quizId).then(
		function (quiz) {
			if (quiz) {
				req.quiz = quiz;
				next();
			} else { next( new Error ('No existe el quiz ' + quizId));}
		}
	).catch (function (error){ next(error);});
};

exports.show = function (req, res ) {
//models.Quiz.find(req.params.quizId).then(function(quiz) {
  res.render('quizes/show', {quiz: req.quiz ,
						errors:[]});
//  })
};


 exports.answer = function (req,res) {
//	models.Quiz.find(req.params.quizId).then(function (quiz) {
 var resultado='Incorrecto';
 if (req.query.respuesta === req.quiz.respuesta){
/*		 res.render ('quizes/answer', {quiz: quiz, respuesta: 'Correcto'});
		 } else {
*/
     resultado='Correcto';
		 }
		 res.render ('quizes/answer', {quiz: req.quiz, respuesta: resultado ,
						errors:[]});

//	})
};

exports.author= function (req,res ) {
 res.render('author', {author : 'santin74', errors: []});
 };


exports.busqueda = function (req,res ) {
 res.render('busqueda', { errors: []} );
 };

exports.index  =function (req,res ) {
/* Se requiere parse'ar para cambiar los acentos ?
Por desgracia yo veo '??' en DOS, pero '%C3%B3' en la query-string:
 web.1  | buscando : Col??n
 web.1  | Executing (default): SELECT * FROM `Quizzes` WHERE pregunta like '%Col??n%';
Y sin embargo:
 web.1  | ←[0mGET /quizes?search=Col%C3%B3n ←[32m200 ←[0m8.151 ms - 1073
*/
	var t=q.parse('0='+req.query.search)[0] ; // aprovechar querystring para el parseo.

	console.log('buscando : ' + t);    //
	var search = '%' + t.replace(/ +/,'%') + '%';   // añadir comodines
  models.Quiz.findAll(t!=='undefined'?{where: ["pregunta like ?", search]}: '').then(function(quizes){
	  res.render('quizes/index.ejs', { quizes: quizes, errors : [] });
	})
};

exports.destroy = function (  req, res ) {
	req.quiz.destroy().then( function() {
		res.redirect('/quizes');
		}).catch(function(error) { next(error)});
};

exports.edit = function (req, res) {
	var quiz = req.quiz;
	res.render ('quizes/edit', {quiz: quiz, errors: []});
};


exports.update = function (req, res) {
	req.quiz.pregunta = req.body.quiz.pregunta;
	req.quiz.respuesta = req.body.quiz.respuesta;

	req.quiz.validate()
	.then (
		function(err){
			if (err)  {
				res.render ('quizes/edit', {quiz: req.quiz, errors: err.errors});
				}
			else {
				req.quiz.save({fields: ["pregunta", "respuesta"]})
				.then ( function () { res.redirect('/quizes');});
			 } // redirect http a lista preguntas
		 }
	);
};

exports.create = function (req, res) {
	var quiz = models.Quiz.build( req.body.quiz );
			console.log (req.body.quiz.pregunta);
      console.log (quiz.respuesta);

	quiz.validate()
	.then(
		function(err) {
			if (err) {
				res.render('quizes/new', {quiz: quiz, errors: err.errors});
			} else {
				console.log('aqui');
				quiz.save({fields: ["pregunta", "respuesta"]})
				.then ( function(){ res.redirect('/quizes')})
			}
		 }
	);
};

/*
// SOlución de J.Ignacio Gil
exports.create = function(req, res){
var quiz = models.Quiz.build( req.body.quiz );

var errors = quiz.validate();//ya qe el objeto errors no tiene then(
if (errors)
{
var i=0; var errores=new Array();//se convierte en [] con la propiedad message por compatibilida con layout
for (var prop in errors) errores[i++]={message: errors[prop]};
res.render('quizes/new', {quiz: quiz, errors: errores});
} else {
quiz // save: guarda en DB campos pregunta y respuesta de quiz
.save({fields: ["pregunta", "respuesta"]})
.then( function(){ res.redirect('/quizes')}) ;
}
};
*/

exports.new = function (req, res) {
	var quiz = models.Quiz.build(
		 {pregunta: "Pregunta", respuesta: "Respuesta"}
		);

	res.render ( 'quizes/new',  {quiz: quiz, errors: []});
};