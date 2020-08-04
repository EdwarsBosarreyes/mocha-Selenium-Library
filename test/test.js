var test = require('selenium-webdriver/testing'),
  expect = require('chai').expect,
  GoogleSearchPage = require('./page-objects/google-search-page'),
  GoogleResultsPage = require('./page-objects/google-results-page');

test.describe('Google Search', function() {

  var driver;
  
  this.timeout(15000);

  test.before(function(done) {
    driver = require('./driver').getDriver();
    done();
  });
  
  test.after(function(done) {
    if(driver)
      driver.quit();
    done();
  }); 

  test.it('Type a Valid Email', function(done) {
    var googleSearchPage = new GoogleSearchPage(driver);
    googleSearchPage.open();
    googleSearchPage.typeSearchQuery('input', 'fake@gmail.com');
    done();
  });

  test.it('Click Button', function (done) {
    var googleSearchPage = new GoogleSearchPage(driver);
    googleSearchPage.clickButton('.btn');
    done();
  });

  test.it('Alert Success', function (done) {
    var googleSearchPage = new GoogleSearchPage(driver);
    googleSearchPage.getTextAlert('.alert-success');
    done();
  });

});
