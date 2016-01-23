/* jshint undef: false, unused: true */
/* globals it, before, after, beforeEach, afterEach */
'use strict';
const assert = require('assert');
const ZombieHelper = require('./helper');

describe('Web', () => {
  before(() => {
    this.helper = new ZombieHelper(process.env.APP_MODE)
    this.browser = this.helper.browser;
  });
  after(() => {
    if (this.server) {
      this.server.close();
    }  });
  describe('Post', () => {
    it('登录用户可以发帖', () => {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(0, [1,2,3].indexOf(1));
    });
    it('非登录用户可以看到登录、注册选项');
  });
});
