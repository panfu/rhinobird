module.exports = {
  'Demo test Bing' : function (browser) {
    browser
      .url('http://www.bing.com')
      .waitForElementVisible('body', 1000)
      .setValue('input#sb_form_q', 'nightwatch')

      .waitForElementVisible('input#sb_form_go', 3000)
      .click('input#sb_form_go')
      .pause(3000)
      .assert.containsText('#b_content', 'Night Watch')
      .end();
  }
};
