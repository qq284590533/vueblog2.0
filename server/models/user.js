const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const USER_SCHEMA = new Schema({
	name: String,					//名字或昵称
	username: String,				//用户名
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

//模型静态方法，所以实例化的对象都具有这些静态方法；
USER_SCHEMA.statics = {

}

//如果密码更新了，在保存用户信息之前对密码进行加密。
USER_SCHEMA.pre('save', function(next) {
	let USER = this;
	if(!USER.isModified('password')) return next()
	bcrypt.genSalt(10, (err, salt) => {
		if(err) return next(err)
		bcrypt.hash(USER.password, salt, (err, hash) => {
			if(err) return next(err)
			USER.password = hash;
			next()
		})
	})
})

const USER_MODEL = mongoose.model('USER_MODEL', USER_SCHEMA)
module.exports = USER_MODEL