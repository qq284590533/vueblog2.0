let Router = require('koa-router');
let admin =  require('./admin');
let front = require('./front');

let router = new Router();

router.use('/admin',admin.routes());
router.use('/front',front.routes());

module.exports = router