var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
    host : 'localhost',
    port : 5432 ,
    database : 'arts_shine_db',
    user :'Shahad'
}

var connection = pgInstance(config);
module.exports = connection;