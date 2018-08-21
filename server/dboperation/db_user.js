const userModel = require('../models/user')
module.exports = {
    async createUser(param) {
        return await new userModel(param).save();
    },
    async hasUser(username) {
        return Boolean(await userModel.findByUserName(username))
    },
    async upDate(param) {
        return Boolean(await userModel.update(param))
    }

}

