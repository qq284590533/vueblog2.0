const mongoose = require('mongoose')
const { host, port, database } = require('../config').db

mongoose.connect(`mongodb://${host}:${port}/${database}`)

module.exports = mongoose.connection;