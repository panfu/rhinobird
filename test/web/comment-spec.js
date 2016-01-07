/* jshint undef: false, unused: true */
/* globals it, before, after, beforeEach, afterEach */
'use strict';
const assert = require('assert');
const Browser = require('zombie');
const app = require('../../server/app.js');

describe('Web', () => {
  before(() => {
    this.server = app.listen(5000);
    Browser.localhost('example.com', 5000);
    this.browser = new Browser({waitDuration: 30*1000});
    return this.browser.visit('/');
  });
  after(() => {
    return this.server.close();
  });
  describe('Comment', () => {
    it('登录用户可以发评论');
    it('非登录用户不可以发评论');
    it('非登录用户可以看到登录、注册选项');
  });
});
