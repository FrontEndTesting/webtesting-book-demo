/* append-message.directive.spec.js */
describe('appendMessageDirective', function () {
    var $compile, $scope, directiveElem;

    beforeEach(function () {
        angular.mock.module('demoApp.directive');

        angular.mock.inject(function (_$compile_, _$rootScope_) {
            var element;

            $compile = _$compile_;
            $scope = _$rootScope_.$new();

            element = angular.element('<div append-message-directive></div>');
            directiveElem = $compile(element)($scope);
        });
    });

    it('should have span element', function () {
        $scope.message = 'It is appended from directive.';
        $scope.$apply();

        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('It is appended from directive.');
    });

});