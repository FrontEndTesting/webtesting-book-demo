/* basicHttp.factory.js */

(function () {
    'use strict';

    angular.module('demoApp.http', []);

    angular
        .module('demoApp.http')
        .factory('basicHttpFactory', basicHttpFactory)

    basicHttpFactory.$inject = ['$http'];
    function basicHttpFactory($http) {
        return {
            getProductName: getProductName
        };

        function getProductName(url) {
            return $http.get(url)
                .then(function (result) {
                    return result.data.name;
                });
        }
    }

})();