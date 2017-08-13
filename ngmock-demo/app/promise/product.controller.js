/* product.controller.js */

(function() {
    angular.module('demoApp.promise', ['demoApp.http']);

    angular.module('demoApp.promise')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['basicHttpFactory'];
    function ProductController(basicHttpFactory) {
        var vm= this;

        basicHttpFactory.getProductName(
            'http://localhost/foo/productinfo.json')
            .then(function(data) {
                vm.name = data;
            }, function () {
                vm.error = 'There has been an error!';
            });
    }
})();
