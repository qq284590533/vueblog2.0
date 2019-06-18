const Router = require('koa-router');
const router = new Router();
const {userController} = require('../controllers')


//后台接口鉴权中间件
//登录时不验证token
router.use(async function(ctx,next){
    let pathToArr = ctx.path.split('/');
    if(pathToArr[pathToArr.length-1]!=='login'){
        //verifyToken
    }
    await next()
})


router.post('/login', userController.login);

router.post('/register', userController.register)

module.exports = router