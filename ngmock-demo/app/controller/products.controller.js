/* products.controller.js */
(function() {
    'use strict';

    angular.module('demoApp.controller', ['demoApp.basic']);

    angular.module('demoApp.controller')
        .controller('ProductsController', ProductsController)

    ProductsController.$inject = ['ProductService'];
    function ProductsController(ProductService) {
        var vm = this;
        vm.products = ProductService();
    }
})();