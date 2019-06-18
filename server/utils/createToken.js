const jwt = require('jsonwebtoken')
const config = require('../config')
module.exports = (username) => {
    return jwt.sign({username:username},config.jwt.secret,{expiresIn:config.jwt.exprisesIn})
}