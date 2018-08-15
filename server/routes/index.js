let Router = require('koa-router');
let admin =  require('./admin');
let front = require('./front');

let router = new Router();

//前台和后台路由区分
router.use('/admin',admin.routes());
router.use('/front',front.routes());

module.exports = router