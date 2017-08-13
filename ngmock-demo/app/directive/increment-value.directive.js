/* incrementvalue.directive.js */

(function () {
    angular.module('demoApp.directive')
        .directive('incrementValueDirective', function () {
            return {
                template: '<button>Increment value!</button>',
                link: function (scope, elem) {
                    elem.find('button').on('click', function () {
                        scope.value++;
                    });
                }
            };
        });
})();