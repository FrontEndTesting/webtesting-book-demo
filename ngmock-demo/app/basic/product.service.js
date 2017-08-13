/* product.service.js */

(function() {
    'use strict';

    angular.module('demoApp.basic', []);

    angular
        .module('demoApp.basic')
        .service('ProductService', ProductService)
        .service('HelperService', HelperService);

    ProductService.$inject = ['HelperService'];
    function ProductService(HelperService) {
        return function() {
            return HelperService();
        };
    }

    function HelperService() {
        return function () {
            return [{name: 'foo'}, {name: 'bar'}];
        };
    }
})();