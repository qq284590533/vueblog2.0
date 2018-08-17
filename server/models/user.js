const mongoose = require('mongoose');
const Schema = mongoose.Schema

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
	//根据username查询
	findByUserName: async function(username) {
		return await this.findOne({username:username});
	},
	findById: async function(id) {
		return await this.findOne({_id:id});
	}
}

const USER_MODEL = mongoose.model('USER_MODEL', USER_SCHEMA)
module.exports = USER_MODEL