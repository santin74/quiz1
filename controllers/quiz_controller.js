var models = require ('../models/models.js');

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

exports.index  =function (req,res ) {
  models.Quiz.findAll().then(function(quizes){
	  res.render('quizes/index.ejs', { quizes: quizes });
	})
 };

