describe('appendSpanDirective', function () {
    var $compile, $scope, directiveElem;

    beforeEach(function () {
        angular.mock.module('demoApp.directive');

        angular.mock.inject(function (_$compile_, _$rootScope_) {
            var element;

            $compile = _$compile_;
            $scope = _$rootScope_.$new();

            element = angular.element('<div append-span-directive></div>');
            directiveElem = $compile(element)($scope);
        });
    });

    it('should have span element', function () {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('It is appended from directive.');
    });

});