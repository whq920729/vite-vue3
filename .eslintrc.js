/*
 * @Author: your name
 * @Date: 2021-06-09 16:26:26
 * @LastEditTime: 2021-06-10 10:08:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-starter/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off' // off-关闭， 1（warn）-警告， 2（error）-错误
  }
}
