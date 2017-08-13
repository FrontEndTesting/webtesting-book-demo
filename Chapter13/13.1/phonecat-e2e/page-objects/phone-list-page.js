var BasePage = require('./base-page.js');

function PhoneListPage ()
{
    this.phoneList = element.all(by.repeater('phone in $ctrl.phones'));
    this.query = element(by.model('$ctrl.query'));
    this.queryField = element(by.model('$ctrl.query'));
    this.orderSelect = element(by.model('$ctrl.orderProp'));
    this.nameOption = this.orderSelect.element(by.css('option[value="name"]'));
    this.phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));
    this.links = element.all(by.css('.phones li a'));
    this.imagelinks = element.all(by.css('.phones li a img'));
}

PhoneListPage.prototype = Object.create(BasePage.prototype, {
    phonesCount: {get: function () {
        return this.phoneList.count();
    }},
    phoneListNames: {get: function () {
        return this.phoneNameColumn.map(function(elem) {
          return elem.getText();
        });
    }},
    linksCount: {get: function () {
        return this.links.count();
    }},
    imageLinksCount: {get: function () {
        return this.imagelinks.count();
    }},
    clickLink: {value: function (idx) {
        return this.links.get(idx).click();
    }},
    clickImageLink: {value: function (idx) {
        return this.imagelinks.get(idx).click();
    }},
    clearQueryField: {value: function () {
        this.queryField.clear(); 
    }},
    setQueryField: {value: function (query) {
        this.queryField.sendKeys(query);   
    }},
    orderByName: {value: function () {
        this.nameOption.click();
    }}
});

module.exports = new PhoneListPage();