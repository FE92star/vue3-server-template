const KoaRouter = require('koa-router')
const controllers = require('../controller')

const router = new KoaRouter()

router.get('/user/list', controllers.userController.find)

module.exports = router
