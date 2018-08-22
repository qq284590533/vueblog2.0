/**
 * 验证器模块
 * 密码和token验证
 */

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    /**
	 * 密码比对
	 * @param {String} password 用户输入的密码
	 * @param {String} passwordHash 数据库存储的加密后的hash
	 * @returns {Promise} 返回一个Promise,如果验证通过 res==true
	 */
	async verifyPassword (password, passwordHash) {
        return await bcrypt.compare(password, passwordHash);
    },
    
    async verifyToken (ctx, next) {
        
    }

}