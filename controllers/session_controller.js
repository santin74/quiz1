//MW autorización de acceso http restringidos

exports.loginRequired  = function (req, res, next) {
	if (req.session.user )  {
		next();
	} else {
		res.redirect('/login');
	}
};

// get login - formulario de login
exports.new = function (req, res) {
	var errors = req.session.errors || [];
	req.session.errors = {};

	res.render('sessions/new', {errors: errors});
 };

 // POST  login - crear sesion
 exports.create=function(req,res){
 var login = req.body.login;
 var password = req.body.password;

 var userController = require('./user_controller');
 userController.autenticar(login,password, function (error, user){
	 if (error) {
		 req.session.errors = [ {"message": 'Se ha producido un error : ' + error}];
		 res.redirect("/login");
		 return;
	 }

	 req.session.user = {id:user.id, username:user.username};
	 var hour = 30000;
	 req.session.cookie.expires = new Date(Date.now() + hour);
	 req.session.cookie.maxAge = hour;
	 res.redirect(req.session.redir.toString()); //redir al path anterior
  });

 };

exports.destroy = function (req, res) {
	delete req.session.user;
	res.redirect(req.session.redir.toString());
};