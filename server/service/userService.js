const sequelize = require('../config/index')

module.exports = {
  /**
   * 去`user`表查询满足查询条件的第一个条目
   */
  find: async (id) => {
    const result = await sequelize.model('user').findOne({
      where: { ssoUserId: id }
    })
    return result
  }
}
