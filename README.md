## yeoman脚手架

### 需要全局安装 yeoman

`
 npm install -g yo
`

### yeoman创建脚手架
脚手架的package.json的name字段必须以 **generator-xxx** 开头

### 脚手架使用

`
yo generator-xxx
`

### 脚手架模板完整流程
- mocha (单元测试)，如使用mocha
- coverage (单元测试报告)，如使用nyc
- start (启动开发服务)，
- build (生产环境资源构建) 
- publish (发布生产环境资源),对接资源发布系统 
- lint (代码lint检查)，如使用 eslint
- check (使用无头浏览器对生产资源进行检测dom信息)，如使用phantom

### 资源发布系统
https://github.com/Devancn/my-publish.git
