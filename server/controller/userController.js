const userService = require('../service/userService')

module.exports = {
  find: async (ctx) => {
    const res = await userService.find(ctx.query)
    ctx.rest(res)
  }
}
