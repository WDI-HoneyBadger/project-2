// select all the orders for one customer by id 

var db = require('../db/config');

var order = {};

order.getAll = function(req,res,next){

    db.manyOrNone("SELECT * FROM order1;") // this is query
    .then(function(result){
        res.locals.coffees = result;
        next();
    })
    .catch(function(error){
        console.log(error);
    })
}


order.find = function (req, res, next){
    db.one("SELECT * FROM order1 where id=$1;", [req.params.id])
        .then(function(result){
            console.log(result); 
            res.locals.order = result
            next(); 
        }) .catch(function(error){
            console.log(error);
            next();
        })
}

order.delete = function (req,res,next){

    db.none("DELETE FROM order1 WHERE id = $1;", [req.params.id])
    .then(function(){
        console.log('DELETED');
        next();
    })
    .catch(function(error){
        console.log(error);
    })
}
module.exports = order;

// add new order 
// step 1 select customer id  or create customer => bring customer id
// step 2 select cofee id 
// step 3 creat new order insert into (customer id , coffe id  , quntity , price ) 