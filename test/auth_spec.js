/* jshint undef: false, unused: true */
/* globals it, before, after, beforeEach, afterEach */

'use strict';
const assert = require('assert');
// const chai = require("chai");
// const chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);

const Browser = require('zombie');

const app = require('../server/app.js');

describe('初体验', () => {
  before(() => {
    this.server = app.listen(5000);
    Browser.localhost('example.com', 5000);
    this.browser = new Browser();
    return this.browser.visit('/');
  });
  after(() => {
    return this.server.close();
  });
  describe('访问首页', () => {
    it('可以看到标题', () => {
      assert.ok(this.browser.success);
      this.browser.assert.text('title', 'Riot Skeleton');
    });
    it('可以看到h1', () => {
      this.browser.assert.text('h1', 'Welcome Home!');
      this.browser.assert.text('h4', 'hello <<<<<<<--- kaCHa');
    });
    it('可以看到h1内容改变', () => {
      // const b = this.browser;
      // console.log(3);
      // setTimeout(function () {
      //   console.log(4);
      //   b.assert.text('h4', 'hello <<<<<<<--- kaCHa');
      //   done();
      // }, 2000);
      // assert.eventually.equal('h1', 'Welcome');
    });
    it('不能看到文章输入框', () => {

    });
  });
});
