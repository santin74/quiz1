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
  res.render('quizes/show', {quiz: req.quiz});
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
		 res.render ('quizes/answer', {quiz: req.quiz, respuesta: resultado});

//	})
};

exports.author= function (req,res ) {
 res.render('author', {author : 'santin74'});
 };


exports.busqueda = function (req,res ) {
 res.render('busqueda' );
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
	  res.render('quizes/index.ejs', { quizes: quizes });
	})
 };

