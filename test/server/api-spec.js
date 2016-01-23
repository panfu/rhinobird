/* jshint undef: false, unused: true */
/* globals it, beforeEach, afterEach */
'use strict';

var request = require('supertest');
  // assert = require('assert'),
  // should = require('should');
  // cookie, session 未来或用得上
  // cookieParser = require('cookie-parser'),
  // session = require('express-session');

describe.skip('API', function() {
  // 指定服务
  var server;
  before(function () {
    server = require('../../server');
  });
  after(function () {
    server.close();
  });
  describe('/api/hello', function() {
    it('should works.', function (done) {
      request(server)
        .get('/api/hello')
        .expect('Content-Type', /json/)
        // json 验证
        .expect(200, {
          two: '2',
          hello: 'It works.',
          one: '1'
        })
        .end(function(err,res) {
          if (err) { throw err; }
          // should 属性验证
          // res.body.should.have.property('hello');
          done();
        });
    });
  });

  describe('/api/posts', function() {
    it('index');
    it('create');
  });

  describe('/api/comments', function() {
    it('index');
    it('create');
  });

  describe('/api/votes', function() {
    it('可以看到投票列表');
    it('可以创建投票');
  });
});
