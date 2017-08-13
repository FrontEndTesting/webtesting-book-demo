/* product.service.spec.js */

describe('ProductService ', function () {
  var ProductService;

  beforeEach(function () {
    angular.mock.module('demoApp.basic');

    angular.mock.module({
      'HelperService': function() {
        return [{name: 'baz'}, {name: 'qux'}];
      }
    });
    // Get the service from the injector
    angular.mock.inject(function (_ProductService_) {
      ProductService = _ProductService_;
    });
  });

  it('should retrieve products successfully', function () {
    var result = ProductService();
    expect(result).toEqual([{name: 'baz'}, {name: 'qux'}]);
  });
});
