var db = require('../db/config');

var coffee = {};

coffee.getAll = function(req,res,next){

    db.manyOrNone("SELECT * FROM coffee;") // this is query
    .then(function(result){
        res.locals.coffees = result;
        next();
    })
    .catch(function(error){
        console.log(error);
    })
}

coffee.creatOrder = function(req,res,next){
    db.one('INSERT INTO order1(price, quantity, coffee_id)VALUES($1, $2 , $3) RETURNING id;', [req.body.price * req.body.quantity, req.body.quantity, req.body.coffee_id, ]) // this is query
    .then(function(result){
        console.log(result)
        res.locals.orderId = result.id;
        next();
    })
    .catch(function(error){
        console.log(error);
    })
}

coffee.findOrder = function (req, res, next){
    db.one("SELECT * FROM order1 where id=$1;", [req.params.id])
        .then(function(result){
            console.log(result); 
            res.locals.order = result
            next(); 
        }) .catch(function(error){
            console.log(error);
        })
}

coffee.find = function (req, res, next){

    // console.log(res.locals.order.coffee_id)
    db.one("SELECT * FROM coffee where id=$1;", [ res.locals.order.coffee_id ])
        .then(function(result){
            console.log(result); 
            res.locals.coffee = result
            next(); 
        }) .catch(function(error){
            console.log(error);
        })
}


coffee.editOrder = function (req, res, next){
    console.log('I AM FIRING');
    db.one("Update order1 SET quantity=$1 where id=$2 returning *;", [req.body.quantity , req.body.id])
        .then(function(result){
            console.log('SUCCESS IN COFFEE.EDITORDER');
            console.log(result); 
            res.locals.orderId = result.id;
            next(); 
        }) .catch(function(error){
            console.log('ERROR IN COFFEE.EDITORDER');
            console.log(error);
            next()
        })
}

module.exports = coffee;