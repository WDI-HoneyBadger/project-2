var auth = {};

auth.restrict = function(req, res, next){
  if(req.session.user){
    next();
  }else{
    res.redirect('/login');
  }
}

auth.onlyUsers = function(req, res, next) {
  if (req.session.user) {

    console.log("update" , req.params.id == req.session.user.id , "id : " , req.session.user.id, req.params.id, req.userId)
    if(req.userId == req.session.user.id){
      next();
    }else{
      res.redirect(`/users/${req.session.user.id}`)
    }
  } else {
    res.redirect('/login');
  }
}

module.exports = auth;