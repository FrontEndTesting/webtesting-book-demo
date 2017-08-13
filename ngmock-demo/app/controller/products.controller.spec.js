/* products.controller.spec.js */

describe('ProductsController', function () {
    var $controller;

    beforeEach(function () {
        angular.mock.module('demoApp.controller');

        angular.mock.inject(function (_$controller_) {
            $controller = _$controller_;
        });
    });

    it('should return products list', function () {
        var productsController;

        productsController = $controller('ProductsController', {});
        expect(productsController.products).toEqual(
            [{ name: 'foo' }, { name: 'bar' }]);
    });

    it('should return products list by anonymous controller', function () {
        var productsController;

        productsController = $controller(function (ProductService) {
            var vm = this;
            vm.products = ProductService();
        }, {});
        expect(productsController.products).toEqual(
            [{ name: 'foo' }, { name: 'bar' }]);
    });

    it('should return products list by mock service', function () {
        var productsController;
        var mockService = function () {
            return [{ name: 'baz' }, { name: 'qux' }];
        };

        productsController = $controller('ProductsController',
            { ProductService: mockService });
        expect(productsController.products).toEqual(
            [{ name: 'baz' }, { name: 'qux' }]);
    });

    it('should initialize controller by bindings', function () {
        var productsController;
        var bindings = [{ name: 'baz' }, { name: 'qux' }];

        productsController = $controller('ProductsController',
            {}, {data: bindings});
        expect(productsController.data).toEqual(
            [{ name: 'baz' }, { name: 'qux' }]);
    });

});