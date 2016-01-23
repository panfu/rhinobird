/* jshint undef: false, unused: true */
/* globals it, before, after, beforeEach, afterEach */

'use strict';
const assert = require('assert');

describe.skip('Web', () => {
  before(() => {
    this.helper = new ZombieHelper(process.env.APP_MODE)
    this.browser = this.helper.browser;
  });
  after(() => {
    if (this.server) {
      this.server.close();
    }
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
