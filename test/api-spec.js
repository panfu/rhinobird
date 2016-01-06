/* jshint undef: false, unused: true */
/* globals it, before, after, beforeEach, afterEach */

'use strict';
const assert = require('assert');

const Browser = require('zombie');

const app = require('../server/app.js');

describe.skip('API', () => {
  before(() => {
    this.server = app.listen(5000);
    Browser.localhost('example.com', 5000);
    this.browser = new Browser({waitDuration: 30*1000});
  });
  after(() => {
    return this.server.close();
  });
  describe('Post', () => {
    it('可以看到标题', () => {

    });
    it('可以看到h1', () => {

    });
    it('可以看到h1内容改变', () => {

    });
    it('不能看到文章输入框', () => {

    });
  });
});
