/* isolatedscope.directive.js */

(function () {
    angular.module('demoApp.directive')
        .directive('isolatedScopeDirective', function () {
            return {
                scope: {
                    config: '=',
                    notify: '@',
                    onChange: '&'
                }
            };
        });
})();