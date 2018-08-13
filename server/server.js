// server.js
let Koa = require('koa');
let router = require('./routes');

let port = 8088; //服务器端口号

const app = new Koa();

app.use(router.routes(), router.allowedMethods());

app.listen(port,() => {
  console.log(`Starting at port ${port}`)
});