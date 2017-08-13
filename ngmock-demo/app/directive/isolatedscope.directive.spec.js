/* isolatedscope.directive.spec.js */

describe('isolatedScopeDirective', function () {

    var $compile, $scope, directiveElem;

    beforeEach(function () {
        angular.mock.module('demoApp.directive');

        angular.mock.inject(function (_$compile_, _$rootScope_) {
            var element;

            $compile = _$compile_;
            $scope = _$rootScope_.$new();

            $scope.config = {
                prop: 'value'
            };
            $scope.notify = true;
            $scope.onChange = jasmine.createSpy('onChange');

            element = angular.element('<isolated-scope-directive config="config" notify="notify" on-change="onChange()"></isolated-scope.directive>');
            directiveElem = $compile(element)($scope);
            $scope.$apply();
        });
    });

    it('config on isolated scope should be two-way bound', function () {
        var isolatedScope = directiveElem.isolateScope();

        isolatedScope.config.prop = "value2";

        expect($scope.config.prop).toEqual('value2');
    });

    it('notify on isolated scope should be one-way bound', function () {
        var isolatedScope = directiveElem.isolateScope();

        isolatedScope.notify = false;

        expect($scope.notify).toEqual(true);
    });

    it('onChange should be a function', function () {
        var isolatedScope = directiveElem.isolateScope();

        expect(typeof (isolatedScope.onChange)).toEqual('function');
    });

    it('should call onChange method of scope when invoked from isolated scope', function () {
        var isolatedScope = directiveElem.isolateScope();
        isolatedScope.onChange();

        expect($scope.onChange).toHaveBeenCalled();
    });
});