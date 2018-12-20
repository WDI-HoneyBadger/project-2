var pgPromise = require('pg-promise');
var pgInstance = pgPromise();


var config = {
    host: 'localhost',
    port: 5432,
    database: 'order_coffee',
    user: 'turkialomari'
  }

  var connection = pgInstance(config);

module.exports = connection;