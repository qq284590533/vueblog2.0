let Router = require('koa-router');
let router = new Router();


//在这里写后台接口鉴权中间件
router.use(function(ctx,next){
    console.log('后台');
    next()
})

router.get('/', async (ctx, next) => {
    ctx.body = 'admin'
})

router.post('/user', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
})

router.get('/page1', async (ctx, next) => {
    ctx.body = `${ctx.path}`
})

module.exports = router