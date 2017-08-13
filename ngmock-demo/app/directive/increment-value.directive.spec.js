/* incrementvalue.directive.spec.js */

describe('incrementValueDirective', function () {
    var $compile, $scope, directiveElem;

    beforeEach(function () {
        angular.mock.module('demoApp.directive');

        angular.mock.inject(function (_$compile_, _$rootScope_) {
            var element;

            $compile = _$compile_;
            $scope = _$rootScope_.$new();

            element = angular.element('<div increment-value-directive></div>');
            directiveElem = $compile(element)($scope);
        });
    });

    it('should increment value on click of button', function () {
        $scope.value = 5;
        var button = directiveElem.find('button');

        button.triggerHandler('click');
        $scope.$apply();

        expect($scope.value).toEqual(6);
    });

});