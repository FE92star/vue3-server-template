const { Sequelize } = require('sequelize')
const configPath = `./config_${process.env.NODE_ENV || 'dev'}.js`

// 加载数据库连接配置文件
const { db, host, username, password } = require(configPath)
// 实例化sequelize
const sequelize = new Sequelize(db, username, password, {
  host,
  dialect: 'mysql'
})

try {
  sequelize.authenticate().then(() => {
    console.log('success')
  })
} catch (error) {
  console.log(error)
}

module.exports = sequelize
