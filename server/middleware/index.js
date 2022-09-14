const _ = require('loadsh')

const filterEmptyParams = async (ctx, next) => {
  console.log('middleware running...')
  // 对空的数据进行过滤
  if (ctx.request.body) {
    ctx.request.body = _.pickBy(ctx.request.body, (e) => {
      const value = `${e}`
      if (value.length) {
        return true
      } else {
        return false
      }
    })
  }
  if (ctx.query) {
    ctx.query = _.pickBy(ctx.query, (e) => {
      const value = `${e}`
      if (value.length) {
        return true
      } else {
        return false
      }
    })
  }
  await next()
}

module.exports = { filterEmptyParams }
