// server.js
const Koa = require('koa')
const router = require('./routes')
const appConfig = require('./config').app
const db = require('./utils/db')
const bodyParser = require('koa-bodyparser')
const app = new Koa();

app.use(bodyParser())

//路由中间件
app.use(router.routes(), router.allowedMethods());

//数据库连接发生错误，打印出错提示同时终止node运行环境
db.on('error', () => {
	console.log('数据库连接错误！')
	process.exit()
})

//数据库连接成功后开启端口监听
db.once('open', () => {
	console.log('数据库连接成功！');
	app.listen(appConfig.port, () => {
		console.log(`Starting at port ${appConfig.port}`)
	});
})
