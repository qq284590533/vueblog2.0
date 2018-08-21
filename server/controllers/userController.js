const DBUser = require('../dboperation/db_user')

module.exports = {
    //创建用户

    //用户注册
    async register(ctx) {
        const res = {
            code: 0,
        }
        let _user = ctx.request.body;
        if(!await DBUser.hasUser(_user.username)){
            res.code = 1;
            res.data = await DBUser.createUser(_user)
        }
        // let user = await userController.createUser(_user);
        ctx.body = res;
    },

    //修改密码

    // async createUser(obj) {
    //     const res = {
    //         code: 0,
    //     }
    //     let hasUser = Boolean(await userModel.findByUserName(obj.username));
    //     if(!hasUser) {
    //         res.code = 1;
    //         res.data = await new userModel(obj).save();
    //     }
    //     return res;
    // },
}
