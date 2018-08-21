const userModel = require('../models/user')

module.exports = {
    async createUser(obj) {
        const res = {
            code: 0,
        }
        let hasUser = Boolean(await userModel.findByUserName(obj.username));
        if(!hasUser) {
            res.code = 1;
            res.data = await new userModel(obj).save();
            return res;
        }else{
            return res;
        }
    },
}
