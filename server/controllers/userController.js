const { DB_USER } = require('../dboperation')
const verifier = require('../utils/verifier')
const createToken = require('../utils/createToken')

module.exports = {
    //用户注册
    async register(ctx) {
        const res = {
            code: 0,
        }
        let _user = ctx.request.body;
        if(!await DB_USER.hasUser(_user.username)){
            res.code = 1;
            res.data = await DB_USER.createUser(_user)
        }
        ctx.body = res;
    },

    //登录
    async login(ctx){
        const res = {
            code: 0,
        }
        const { username, password } = ctx.request.body;
        const user = await DB_USER.findByUserName(username);
        let passwordHash = user.password;
        let pass = await verifier.verifyPassword(password, passwordHash);
        if(pass){
            res.code = 1;
            res.token = createToken(username);
        }
        ctx.body = res;
    }

    //修改密码

}
