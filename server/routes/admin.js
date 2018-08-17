const Router = require('koa-router');
const router = new Router();
const {userController} = require('../controllers')

//在这里写后台接口鉴权中间件
router.use(async function(ctx,next){
    console.log('后台');
    await next()
})

router.get('/', async (ctx, next) => {
    ctx.body = 'admin'
})

router.post('/user', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
})

router.post('/register', async (ctx, next) => {
    let _user = ctx.request.body;
    let user = await userController.createUser(_user);
    ctx.body = user;
})

router.get('/page1', async (ctx, next) => {
    ctx.body = `${ctx.path}`
})

module.exports = router