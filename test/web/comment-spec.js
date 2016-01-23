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
    console.log(1);
    if (this.server) {
      console.log(1.1);
      this.server.close();
    }
  });
  describe('Comment', () => {
    it('登录用户可以发评论', (done) => {
      this.helper.browser.visit(this.helper.start_url, () => {
        this.helper.browser.assert.text('title', 'Riot Skeleton');
        done();
      });
  });
    it('非登录用户不可以发评论');
    it('非登录用户可以看到登录、注册选项');
  });
});
