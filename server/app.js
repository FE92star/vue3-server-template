const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')

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

app.listen(3000)

console.warn('koa 应用启动成功')
