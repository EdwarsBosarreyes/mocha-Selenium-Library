var page = require('./page');
const { By } = require('selenium-webdriver');
var result;

function GoogleSearchPage (webdriver) {
  page.call(this, webdriver, 'https://library-app.firebaseapp.com');
}

GoogleSearchPage.prototype = Object.create(page.prototype);
GoogleSearchPage.prototype.constructor = GoogleSearchPage;

GoogleSearchPage.prototype.typeSearchQuery = function( selector, searchQuery) {
  return this.driver.findElement({ css: selector }).sendKeys(searchQuery);
};

GoogleSearchPage.prototype.clickButton = function(selector) {
  return this.driver.findElement({ css: selector}).click();
};

GoogleSearchPage.prototype.getTextAlert = function (selector) {
  this.waitFor({ css: selector });
  return this.driver.findElement({ css: selector});
  
};

module.exports = GoogleSearchPage;
