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
	//根据username查询
	findByUserName: async function(username) {
		return await this.findOne({username:username});
	},
	findById: async function(id) {
		return await this.findOne({_id:id});
	},

	/**
	 * 密码比对
	 * @param {String} _password 用户输入的密码
	 * @param {String} password 数据库存储的加密后的hash
	 * @returns {Promise} 返回一个Promise,如果验证通过 res==true
	 */
	comparePassword: function (_password, password) {
		return new Promise((resolve, reject) => {
			bcrypt.compare(_password, password, function (err, res) {
				if (!err) resolve(res)
				else reject(err)
			})
		})
	},	
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