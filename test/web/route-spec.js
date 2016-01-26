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
    }
  });
  describe('Route', () => {
    it('/login');
    it('/logout');
    it('/');
    it('/posts');
    it('/comments');
    it('/users/:id');
    it('/home');
    it('/posts/:id');
    it('/comments/:id');
  });
});
