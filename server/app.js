/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

'use strict';

// babel 编译
// require('babel-core/register');

const domain = require('domain');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const AV = require('leanengine');
const app = express();

// 各个模块
const apiRouter = require('./api-router');
const tool = require('./tool');
const config = require('./config');

// 设置 view 引擎
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/../web/public'));
app.use('/assets/', express.static(__dirname + '/../web/dist'));

// 使用 LeanEngine 中间件
app.use(AV.Cloud);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// 未处理异常捕获 middleware
app.use((req, res, next) => {
  let d = domain.create();
  d.add(req);
  d.add(res);
  d.on('error', (err) => {
    console.error('uncaughtException url=%s, msg=%s', req.url, err.stack || err.message || err);
    if (!res.finished) {
      res.statusCode = 500;
      res.setHeader('content-type', 'application/json; charset=UTF-8');
      res.end('uncaughtException');
    }
  });
  d.run(next);
});

// 跨域支持
app.all('/api/*', (req, res, next) => {
  const origin = req.headers.origin;
  if (config.whiteOrigins.indexOf(origin) !== -1) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  }
  next();
});

// app.get('/', (req, res, next) => {
//   res.render('index');
// });

// api
app.use('/api', apiRouter);

// 如果任何路由都没匹配到，则认为 404
// 生成一个异常让后面的 err handler 捕获
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

module.exports = app;
