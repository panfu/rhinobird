var request = require('supertest')
  , assert = require('assert')
  , should = require('should')
  // cookie, session 未来或用得上
  , cookieParser = require('cookie-parser')
  , session = require('express-session');

describe('测试 API', function() {
  // 指定服务根目录
  var url = 'http://localhost:3000';
  before(function(done) {
    // 连个数据库、云服务啥的。
    done();
  });
  describe('/api/hello', function() {
    it('should works.', function (done) {
      request(url)
        .get('/api/hello')
        .expect('Content-Type', /json/)
        // json 验证
        .expect(200, {
          hello: 'It works.'
        })
        .end(function(err,res) {
          if (err) {
            throw err;
          }
          // should 属性验证
          res.body.should.have.property('hello');
          done();
        });
    })
  });
});
