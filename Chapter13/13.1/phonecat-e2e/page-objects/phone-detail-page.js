var BasePage = require('./base-page.js');

function PhoneDetailPage ()
{
    this.phoneName = element(by.binding('$ctrl.phone.name'));
    this.mainImage = element(by.css('img.phone.selected'));
    this.thumbnails = element.all(by.css('.phone-thumbs img'));
}

PhoneDetailPage.prototype = Object.create(BasePage.prototype, {
    phoneNameText: {get: function () {return this.phoneName.getText();}},
    mainImageSrc: {get: function () {return this.mainImage.getAttribute('src');}},
    clickThumbnail: {value: function (idx) {this.thumbnails.get(idx).click();}}
});

module.exports = new PhoneDetailPage();