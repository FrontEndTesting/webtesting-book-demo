var detailpage = require('../page-objects/phone-detail-page.js');
var listpage = require('../page-objects/phone-list-page.js');

describe('View: Phone detail', function() {
    beforeEach(function() {
      listpage.goHome();
      listpage.setQueryField('nexus-s');
      listpage.clickLink(0);
    });

    it('should display the `nexus-s` page', function() {
      expect(detailpage.phoneNameText).toBe('Nexus S');
    });

    it('should display the first phone image as the main phone image', function() {
      expect(detailpage.mainImageSrc).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });

    it('should swap the main image when clicking on a thumbnail image', function() {
      detailpage.clickThumbnail(2);
      expect(detailpage.mainImageSrc).toMatch(/img\/phones\/nexus-s.2.jpg/);

      detailpage.clickThumbnail(0);
      expect(detailpage.mainImageSrc).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });
});