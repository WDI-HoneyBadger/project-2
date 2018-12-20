var db = require('../db/config');
var image = {};

image.getAll = function(req, res, next){
  db.manyOrNone("SELECT * FROM images;")
    .then(function(result){
      res.locals.image = result;
      next()
    })
    .catch(function(error){
      console.log(error);
      next()
    })
}

image.find = function (req, res, next) {
    console.log("img find" , req.params.image_id)
  db.one("SELECT * FROM images WHERE id=$1;", [req.params.image_id])
    .then(function (result) {
      res.locals.image= result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}


image.create = function (req, res, next) {
    console.log(req.body);
    // var createImage = {
    //     image : req.body.image,
    //     text : req.body.text,
    //     id_user : req.params.id_user
    // }
    db.one('INSERT INTO images(image,text,id_user) VALUES ($1,$2,$3) RETURNING id_user;',
          [req.body.image, req.body.text, req.userId ])
      .then(function (result) {
        res.locals.id_user = result.id_user;
        next();
        console.log('success create')
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  image.update = function (req, res, next) {

    console.log(req.body , "img update")
    // var updateImage = {
    //     image : req.body.image,
    //     text : req.body.text
    // }
    console.log(req.params.image_id)
    db.one('UPDATE images SET text=$1 WHERE id=$2 RETURNING id_user;',
    [ req.body.text , req.params.image_id])
      .then(function (result) {
        console.log("success >>>>" , result);

        res.locals.id_user = result.id_user;
        next();
      })
      .catch(function (error) {
        console.log("ee" , error);
        next();
      })
  }
  
image.delete = function (req, res, next) {
    db.one('DELETE FROM images WHERE id=$1 RETURNING id_user;', [req.params.image_id])
      .then(function (result) {
        res.locals.id_user = result.id_user;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

  image.findByUser = function (req, res, next) {
    db.manyOrNone("SELECT * FROM images WHERE id_user=$1;", [req.params.id])
      .then(function (result) {
        res.locals.image = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  
module.exports = image;