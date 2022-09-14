const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')

const router = require('./router')
// model的定义注册到sequelize实例
require('./model/index')

const app = new Koa()

// 开启cors跨域
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowHeaders: ['Content-Type', 'Accept']
  })
)

// 上下文解析
app.use(bodyParser())
// 路由解析
app.use(router.routes())
app.on('error', (err,) => {
  console.log('发生错误', err.message)
})

app.listen(3000)

console.log('koa 应用启动成功')
