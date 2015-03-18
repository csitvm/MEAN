/**
 * Schema file corresponding to Mean db
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meanSchema = new Schema({
	user_name: String,
	password: String,
	age: Number
});
module.exports.meantab = mongoose.model('mean', meanSchema, 'mean');

var customerSchema = new Schema({
	name: String,
	place: String
});
module.exports.customertab = mongoose.model('customer', customerSchema, 'customer');