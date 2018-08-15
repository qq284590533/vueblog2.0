const mongoose = require('mongoose');
const Schema = mongoose.Schema

const USER_SCHEMA = new Schema({
	name: String,					//名字或昵称
	usernam: String,				//用户名
	password: String,				//密码
	email: String,					//邮箱
	token: String,					//token
	createTime: {					//用户注册时间
		type: Date,
		default: Date.now()
	},
	lastLoginTime: {				//最后登录时间
		type: Date,
		default: Date.now()
	}
})

module.exports = USER_MODEL = mongoose.model('USER_MODEL', USER_SCHEMA)