var listpage = require('../page-objects/phone-list-page.js');

describe('View: Phone list', function() {    
    beforeEach(function() {
      listpage.goHome();
    });
    
    it('should redirect to /phones', function() {
        expect(listpage.absoluteUrl).toBe('/phones');
    });

    it('should filter the phone list as a user types into the search box', function() {
      expect(listpage.phonesCount).toBe(20);
      listpage.setQueryField('Dell');
      expect(listpage.phonesCount).toBe(2);
      listpage.clearQueryField();
      expect(listpage.phonesCount).toBe(20);
    });

    it('should be possible to control phone order via the drop-down menu', function() {
      listpage.setQueryField('4G');

      expect(listpage.phoneListNames).toEqual([
        'MOTOROLA ATRIX\u2122 4G',
        'T-Mobile myTouch 4G',
        'T-Mobile G2'
      ]);

      listpage.orderByName();

      expect(listpage.phoneListNames).toEqual([
        'MOTOROLA ATRIX\u2122 4G',
        'T-Mobile G2',
        'T-Mobile myTouch 4G'
      ]);
    });

    it('should render phone specific links', function() {
      listpage.setQueryField('LG');

      expect(listpage.linksCount).toBe(2);
      listpage.clickLink(0);
      expect(listpage.absoluteUrl).toBe('/phones/lg-axis');
    });
});
