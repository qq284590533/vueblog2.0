/**
 * 配置项
 */

module.exports = {
	app: {
		port: 8088
	},
	db: {
		host: 'localhost',
		port: 27018,
		database: 'vueblog2'
	},
	jwt: {
		secret: '284590533@qq.com',            
		exprisesIn: '3600s'          //以秒为单位
	},
}