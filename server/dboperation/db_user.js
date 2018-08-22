/**
 * 数据库操作模块
 * 模块包含关于用户的所以数据库操作
 */
const userModel = require('../models/user')
module.exports = {
    /**
     * 创建用户
     * @param {Object} param 
     */
    async createUser(param) {
        return await new userModel(param).save();
    },

    /**
     * 根据用户名查询用户是否存在
     * @param {string} username
     */
    async hasUser(username) {
        return Boolean(await this.findByUserName(username))
    },

    //根据username查询
	async findByUserName(username) {
		return await userModel.findOne({username:username});
    },
    
    //根据_id查询
	async findById(id) {
		return await userModel.findOne({_id:id});
	},

    async upDate(param) {
        await userModel.update(param)
    }

}

