// server.js
const Koa = require('koa')
const router = require('./routes')
const appConfig = require('./config').app
const db = require('./utils/db')

const app = new Koa();
app.use(router.routes(), router.allowedMethods());

db.on('error', () => {
	console.log('数据库连接错误！')
	process.exit()
})

db.once('open', () => {
	console.log('数据库连接成功！');
	app.listen(appConfig.port, () => {
		console.log(`Starting at port ${appConfig.port}`)
	});
})
