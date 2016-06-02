// Base Setup
// ====================================================================================================

// call the package we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use middleware bodyParser()
// let us get the data from a POST
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// set our port
var port = process.env.PORT || 3000;

// base route for API
// ====================================================================================================

require('./routes/users.routes.js')(app);

// start the api server
// ====================================================================================================
app.listen(port);
console.log('server start on port ' + port);