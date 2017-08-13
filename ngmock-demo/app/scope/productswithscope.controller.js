/* productswithscope.controller.js */
(function() {
    'use strict';

    angular.module('demoApp.rootscope', ['demoApp.basic']);

    angular.module('demoApp.rootscope')
        .controller('ProductsWithScopeController', ProductsWithScopeController)

    ProductsWithScopeController.$inject = ['$scope', 'ProductService'];
    function ProductsWithScopeController($scope, ProductService) {
        $scope.products = ProductService();
    }
})();