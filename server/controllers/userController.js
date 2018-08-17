const userModel = require('../models/user')

module.exports = {
    // async findByUserName(username) {
    //     let resData = {
    //         code: 0,
    //         data: null
    //     }
    //     let user = await userModel.findOne({username:username});
    //     if(user) {
    //         console.log(typeof user)
    //         resData.code = 1;
    //         resData.data = user;
    //     }
    //     return resData;
    // },

    async createUser(obj) {
        const res = {
            code: 0,
            data: null
        }
        let hasUser = await userModel.findByUserName(obj.username);
        if(!hasUser) {
            res.data = await new userModel(obj).save();
            return res;
        }else{
            res.msg = '用户名已存在！'
            res.data = hasUser;
            return res;
        }
    },
}
