/*
 * @Author: your name
 * @Date: 2021-06-10 14:03:48
 * @LastEditTime: 2021-06-10 16:28:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-vue3-starter/jest.config.js
 */
// const path = require('path')

module.exports = {
  // rootDir: path.resolve(__dirname),
  moduleFileExtensions: ['vue', 'js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$'
  // testMatch: ['<rootDir>/tests/*.spec.ts?(x)']
}
