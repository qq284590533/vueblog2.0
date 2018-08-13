let Router = require('koa-router');
let router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'front'
})

router.get('/page1', async (ctx, next) => {
    ctx.body = `${ctx.path}`
})

module.exports = router