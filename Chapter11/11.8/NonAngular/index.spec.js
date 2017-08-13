describe('NonAngular Test', function() {
  it('should wait for timer', function() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().timeouts().implicitlyWait(1000);
    browser.get('/');
    $('#mybutton').click();
    expect($('#shortdiv').getText()).toBe('Implicit Wait');
    browser.wait(ExpectedConditions.presenceOf($('#longdiv')), 5000);
    expect($('#longdiv').getText()).toBe('Explicit Wait');
  });  
});
