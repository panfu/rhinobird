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
  describe('User', () => {
    it('可以注册', () => {

    });
    it('可以登陆', () => {

    });
    it('可以查询信息', () => {

    });
    it('可以登出', () => {

    });
  });
});
