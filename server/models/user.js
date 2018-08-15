const mongoose = require('mongoose');
const Schema = mongoose.Schema

const USER_SCHEMA = new Schema({
	name: String,
	usernam: String,
	password: String,
	email: String,
	token: String,
	createTime: {
		type: Date,
		default: new Date()
	},
	lastLoginTime: {
		type: Date,
		default: new Date()
	}
})

module.exports = USER_MODEL = mongoose.model('USER_MODEL', USER_SCHEMA)