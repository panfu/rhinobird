'use strict';
const Zombie = require('zombie');
const app = require('../../server/app.js');

class ZombieHelper {
  constructor(app_mode) {
    console.log('swich app mode to: ' + (app_mode || 'local'));
    switch(app_mode) {
      case 'local':
        console.log(1);
        // this.server = app.listen(5000);
        Zombie.localhost('example.com', 5000);
        this.browser = new Zombie({waitDuration: 30*1000});
        this.start_url = '/';
        break;
      case 'stagging':
        console.log(11);
        this.server = null;
        this.browser = new Zombie({debug: true});
        this.start_url = 'http://stg-rhinobird.leanapp.cn/';
        break;
      case 'production':
        console.log(111);
        this.server = null;
        this.browser = new Zombie({debug: true});
        this.start_url = 'http://rhinobird.leanapp.cn/';
        break;
      default:
        console.log(1111);
        // this.server = app.listen(5000);
        Zombie.localhost('example.com', 5000);
        this.browser = new Zombie({waitDuration: 30*1000});
        this.start_url = '/';
        break;
    }
  }
  closeServer() {
    if (this.server) {
      this.server.close();
    }
  }
  // methods
}

module.exports = ZombieHelper;