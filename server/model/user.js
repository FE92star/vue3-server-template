const { DataTypes } = require('sequelize')
const sequelize = require('../config/index')

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.BIGINT, // 数据类型
      primaryKey: true, // 是否为主键
      allowNull: false, // 是否允许为空
      autoIncrement: true, // 开启自增
      comment: '用户id' // 字段备注
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: '用户名'
    },
    mobile: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: '用户手机号'
    },
  },
  {
    comment: '存储 用户信息 表'
  }
)

module.exports = User
