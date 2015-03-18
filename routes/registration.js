
/*
 * GET registration page.
 */

var mongoose = require('mongoose');
var Mean = require('../models/mean_models.js');

exports.showUserList = function(req, res){
	mongoose.connect('mongodb://localhost:27017/mean');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
	  console.log('Connected to mongoDB..');
	});
		  
	var displayData = function(res){
		return function(err, data){
			if (err){
				console.log('error occured');
                return;
			}
			mongoose.connection.close();
			console.log(data);
			res.render('registration', {
	            userlist: data
	        });
	    }
	}

	Mean.meantab.find({}).exec(displayData(res));
};