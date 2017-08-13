/* append-message.directive.js */

(function() {
    angular.module('demoApp.directive')
        .directive('appendMessageDirective', function() {
            return {
                link: function(scope, elem) {
                    var spanElement = angular.element(
                        '<span>' + scope.message + '</span>');
                    elem.append(spanElement);                    
                    
                    scope.$watch('message', function(newVal, oldVal){
                        spanElement.text(newVal);
                    });
                }
            };
        });

})();