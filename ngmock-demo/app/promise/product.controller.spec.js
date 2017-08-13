/* product.controller.spec.js */

describe('Testing a Controller that uses a Promise', function () {
    var $scope, deferred, productController;

    beforeEach(function () {
        angular.mock.module('demoApp.promise');

        angular.mock.inject(function (_$controller_,
             _$q_, basicHttpFactory, _$rootScope_) {

            // We use the $q service to create a mock instance of defer
            deferred = _$q_.defer();

            $scope = _$rootScope_.$new();

            // Use a Jasmine Spy to return the deferred promise
            spyOn(basicHttpFactory, 'getProductName')
                .and.returnValue(deferred.promise);

            productController = _$controller_('ProductController', {
                basicHttpFactory: basicHttpFactory
            });
        });
    });

    it('should resolve promise', function () {
        // Setup the data we wish to return for the .then function in the controller
        deferred.resolve('foo');

        // We have to call apply for this to work
        $scope.$apply();

        expect(productController.name).not.toBe(undefined);
        expect(productController.name).toBe('foo');
        expect(productController.error).toBe(undefined);
    });

    it('should reject promise', function () {
        deferred.reject();

        // We have to call apply for this to work
        $scope.$apply();

        expect(productController.name).toBe(undefined);
        expect(productController.error).toBe('There has been an error!');
    });
});