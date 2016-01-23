/* jshint undef: false, unused: true */
/* globals it, before, after, beforeEach, afterEach */

'use strict';
const assert = require('assert');
const ZombieHelper = require('./helper');

describe('初体验', () => {
  before(() => {
    this.helper = new ZombieHelper(process.env.APP_MODE);
    this.browser = this.helper.browser;
    return this.helper.browser.visit(this.helper.start_url);
  });
  after(() => {
    this.helper.closeServer();
  });
  describe('访问首页', () => {
    it('可以看到标题', () => {
      this.helper.browser.assert.success();
      this.helper.browser.assert.text('title', 'Riot Skeleton');
    });
    it('可以看到h1', () => {
      this.helper.browser.assert.text('h1', 'Welcome Home!');
      this.helper.browser.assert.text('h4', 'hello <<<<<<<--- kaCHa');
    });
    it('可以看到h1内容改变');
    it('不能看到文章输入框');
  });
});
