/**
 * 需要打包的模块
 */
module.exports = {
  // 入口文件
  index: {
    input: 'src/index.js',
    output: 'index'
  },
  // 需要打包的模块
  'file-handle': {
    input: 'packages/file-handle/index.js',
    output: 'file-handle'
  },
  'test-module': {
    input: 'packages/test-module/index.js',
    output: 'test-module'
  }
}
