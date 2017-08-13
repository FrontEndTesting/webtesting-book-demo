/* product-info.directive.spec.js */

describe('productInfoDirective', function() {

    var $compile, $scope, directiveElem;

    beforeEach(function() {
        angular.mock.module('demoApp.template');
        angular.mock.module('demoApp.directive');

        angular.mock.inject(function(_$compile_, _$rootScope_) {
            var element;

            $compile = _$compile_;
            $scope = _$rootScope_.$new();

            element = angular.element('<div product-info-directive></div>');
            directiveElem = $compile(element)($scope);
            $scope.$apply();
        });
    });

    it('should applied template', function() {
        var h3Element = directiveElem.find('h3');

        $scope.product = { name: 'foo' };
        $scope.$apply();
        
        expect(h3Element.text()).toEqual('Product Name: foo');
    });
});