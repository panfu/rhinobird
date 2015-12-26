module.exports = {
  'Demo test welcome page' : function (browser) {
    browser
      .url('http://localhost:5555')
      .waitForElementVisible('body', 100)

      .assert.containsText('h1', 'Welcome')
      .waitForElementVisible('h4', 500)
      .assert.containsText('h4', 'hello world')
      .pause(3000)
      .assert.containsText('h4', 'hello <<<<<<<--- kaCHa')
      .end();
  }
};
