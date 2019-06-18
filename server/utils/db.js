const mongoose = require('mongoose')
const { host, port, database } = require('../config').db

//连接数据库
mongoose.connect(`mongodb://${host}:${port}/${database}`)

//暴露数据库实例
module.exports = mongoose.connection;