/* jshint undef: false, unused: true */
/* globals it */
'use strict';

var Zombie = require('zombie');
var browser = new Zombie({waitDuration: 30*1000});

describe.skip('测试远程地址', function(){

  it('百度一下', function(done){

    browser.visit('http://www.baidu.com', function () {
      // expect(browser.text("title")).to.equal('Google');
      browser.assert.text('title', '百度一下，你就知道');
      done();
    });
  });

});
