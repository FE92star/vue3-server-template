const fs = require('fs')
const path = require('path')
// 扫描model文件夹下所有文件，将model的定义注册到sequelize实例上
const modelFiles = fs.readdirSync(path.join(__dirname, '../model'))
modelFiles.forEach((item) => {
  require(path.join(__dirname, '../model', item))
})
