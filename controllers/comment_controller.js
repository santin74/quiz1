var models = require('../models/models.js');

// autoload de id comentarios
exports.load=function(req,res,next, commentId){
	models.Comment.find({
		where: { id:Number(commentId) }
	 }).then(function(comment) {
	 if (comment) {
		 req.comment = comment ;
		 next();
		} else { next(new Error ('No existe commentId=' + commentId))}
	 }
	).catch(function(error){next(error)});
};

// Get /quizes/:quizId/comments/new
exports.new = function (req,res) {
	res.render('comments/new.ejs', {quizid: req.params.quizId, errors: []});
};

// POST /quizes/:quizId/comments
exports.create = function (req,res){
	var registro = { texto: req.body.comment.texto,
		QuizId: req.params.quizId
		};
	if (req.session.user  )
	   registro.publicado=true; // nos hemos registrado, pasamos a publicado
	var comment= models.Comment.build(
		registro 
		);

	comment.validate().then(
		function(err){
			if (err) {
				res.render('comments/new.ejs',
					  { comment: comment, quizid: req.params.quizId, errors : err.errors});
			} else  {
						comment.save().then(
							function () { res.redirect('/quizes/'+req.params.quizId)});
					}
		}
	).catch(function(error) {next(error)});
};



// get quizes/:id/comments/:commntid/publish
exports.publish = function (req, res) {
	req.comment.publicado=true;

	req.comment.save ( { fields: ["publicado"]})
		.then( function() { res.redirect('/quizes/'+req.params.quizId);})
		.catch(function(error){next(error)});
 };