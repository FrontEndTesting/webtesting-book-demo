/* productswithscope.controller.spec.js */

describe('ProductsWithScopeController', function() {
    var $controller;
    var $rootScope;

    beforeEach(function () {
        angular.mock.module('demoApp.rootscope');

        angular.mock.inject(function (_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;  
        });
    });

    it('should return products list', function () {
        var $scope = $rootScope.$new();

        $controller('ProductsWithScopeController', {$scope: $scope});
        expect($scope.products).toEqual(
            [{ name: 'foo' }, { name: 'bar' }]);
    });

    it('should return message from parent scope', function () {
        var $scope = $rootScope.$new();
        var $childScope = $scope.$new(); 

        $scope.message = 'Parent Scope';

        $controller('ProductsWithScopeController', {$scope: $childScope});
        expect($childScope.products).toEqual(
            [{ name: 'foo' }, { name: 'bar' }]);
        expect($childScope.message).toEqual('Parent Scope');

    });

});