var auth = {};

auth.restrict = function(req, res, next){
  if(req.session.volunteeruser){
    next();
  }else{
    res.redirect('/login');
  }
}

auth.onlyUsers = function(req, res, next) {
  if (req.session.volunteeruser) {
    if(req.params.id == req.session.volunteeruser.id){
      next();
    }else{
      res.redirect(`/users/${req.session.volunteeruser.id}`)
    }
  } else {
    res.redirect('/login');
  }
}

module.exports = auth;