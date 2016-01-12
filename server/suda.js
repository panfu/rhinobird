'use strict';
const request = require('request');
const CryptoJS = require('crypto-js');
const config  = require('./config');
class Suda {
  encrypt(portal_secret, customer_data_str) {
    const key = CryptoJS.enc.Utf8.parse(portal_secret.substr(0, 16));
    const iv = CryptoJS.enc.Utf8.parse(portal_secret.substr(16, 16));
    const srcs = CryptoJS.enc.Utf8.parse(customer_data_str);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC
    });
    return encrypted.toString().replace(/\+/g, '-').replace(/\//g, '_');
  }
  getPortalKey(customer_data) {
    const customer_data_str = JSON.stringify(customer_data);
    return this.encrypt(config.yhsd.portal_secret, customer_data_str);
  }
  getPortalUrl(customer_data) {
    return 'http://' + config.yhsd.shop_domain + '/account/multipass/login/' + this.getPortalKey(customer_data);
  }
}

module.exports = new Suda();
