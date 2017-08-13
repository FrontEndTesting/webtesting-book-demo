function BasePage(){
}

BasePage.prototype = Object.create({}, {
    absoluteUrl: {get: function () {return browser.getLocationAbsUrl();}},
    goHome: {value: function () {browser.get('angular-phonecat/step-14/app');}}

});

module.exports = BasePage;