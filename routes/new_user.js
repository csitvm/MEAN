/**
 * New node file
 */
var mongoose = require('mongoose');
var Mean = require('../models/mean_models.js');

exports.showUserAddPage = function(req, res){
	res.render('new_user', { title: 'Add New User' });
};

exports.addUserToDatabase = function(req, res){
	mongoose.connect('mongodb://localhost:27017/mean');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
	  console.log('Connected to mongoDB..');
	});
	
	// Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userPassword = req.body.userpassword;
    var userAge = req.body.userage;
    
    var urSchema = new Mean({
    	"user_name": userName
    	, "password": userPassword
    	, "age": userAge
    });

    urSchema.save(function(err, thor) {
		mongoose.connection.close();
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
	});   	
};

exports.deleteUser = function(req, res){
	mongoose.connect('mongodb://localhost:27017/mean');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
	  console.log('Connected to mongoDB..');
	});
	
	var removeData = function(res){
		return function(err, data){
			if (err){
				console.log('error occured');
                return;
			}
			mongoose.connection.close();
			// If it worked, set the header so the address bar doesn't still say /adduser
            res.location(req.header('Referer'));
            // And forward to success page
            res.redirect(req.header('Referer'));
	    }
	}
	
	// Get our form values. These rely on the "name" attributes
    var userName = req.params.username;
    Mean.find({ "user_name":userName }).remove().exec(removeData(res));
};