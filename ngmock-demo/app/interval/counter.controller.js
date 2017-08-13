/* counter.controller.js */

(function () {
    angular.module('demoApp.interval', []);

    angular.module('demoApp.interval')
        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$interval'];
    function CounterController($scope, $interval) {
        var vm = this;
        var counterInstance;

        vm.counter = 0;
        vm.counterFunction = function () {
            vm.counter += 1;
        };

        vm.start = function () {
            counterInstance = $interval(vm.counterFunction, 1000, 10);
        };

        vm.cancel = function () {
            if (angular.isDefined(counterInstance)) {
                $interval.cancel(counterInstance);
                counterInstance = undefined;
            }
        };

        // listen on DOM destroy (removal) event, and cancel the next UI update
        // to prevent updating time after the DOM element was removed.
        $scope.$on('$destroy', function () {
            vm.cancel();
        });
    }

})();