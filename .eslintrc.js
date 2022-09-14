const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: ['@fe92star/eslint-config-basic', '@fe92star/eslint-config-prettier'],
  // custom rules
  rules: {
    'no-console': 'off'
  }
})
