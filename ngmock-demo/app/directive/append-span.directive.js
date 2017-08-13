/* append-span.directive.js */

(function() {
    angular.module('demoApp.directive')
        .directive('appendSpanDirective', function() {
            return {
                link: function(scope, elem) {
                    elem.append('<span>It is appended from directive.</span>');
                }
            };
        });
})();