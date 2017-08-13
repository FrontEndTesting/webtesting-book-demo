/* product-info.directive.js */

(function () {
    angular.module('demoApp.directive')
        .directive('productInfoDirective', function () {
            return {
                templateUrl: 'app/directive/product-info.html'
            };
        });
})();

