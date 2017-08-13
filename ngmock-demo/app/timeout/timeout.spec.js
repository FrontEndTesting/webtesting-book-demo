/* timeout.spec.js */
describe('Controller', function () {
    var $controller;
    var $timeout;

    beforeEach(function () {
        angular.mock.inject(function (_$controller_, _$timeout_) {
            $controller = _$controller_;
            $timeout = _$timeout_;
        });
    });

    it('should set result to 5 with timeout', function () {
        var timeoutController;

        timeoutController = $controller(function ($timeout) {
            var vm = this;
            $timeout(function () {
                vm.result = 5;
            }, 3000);

        }, {});

        $timeout.flush();

        // this will throw an exception if there are any pending timeouts.
        $timeout.verifyNoPendingTasks();

        expect(timeoutController.result).toBe(5);
    });
});