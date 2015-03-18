
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , hello = require('./routes/hello')
  , registration = require('./routes/registration')
  , customer = require('./routes/customerlist')
  , newuser = require('./routes/new_user')
  , http = require('http')
  , path = require('path')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , morgan  = require('morgan')
  , mongoose = require('mongoose')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/node_modules/static-favicon/favicon.ico'));
app.use(morgan());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

// the initial page of our web site
app.get('/', routes.index);

// a static response example
app.get('/users', user.list);

// how to pass multiple parameters to a page. eg:- use URL as http://localhost:3000/hellow/Rajesh/TVM
app.get('/hellow/:who/:place', hello.showMessage);

// a database connection and select example
app.get('/userlist', registration.showUserList);

//used to send JSON response to Angular JS
app.get('/customer', customer.showCustomerList);

//user input form example
app.get('/newuser', newuser.showUserAddPage);

//user getting added to database upon submit example
app.post('/newuser', newuser.addUserToDatabase);

//user delete example
app.get('/newuser/:username', newuser.deleteUser);

// to forward all requests to pages which are unhandled
app.get("*", function(request, response) { response.end("404! Page Not Found."); });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});