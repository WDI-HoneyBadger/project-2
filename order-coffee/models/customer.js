var db = require('../db/config');

var customer = {};

customer.getAll = function(req,res,next){

    db.manyOrNone("SELECT * FROM customer;") // this is query
    .then(function(result){
        res.locals.customerInfo = result;
        next();
    })
    .catch(function(error){
        console.log(error);
    })
}

module.exports = customer;