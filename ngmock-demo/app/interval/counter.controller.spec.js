/* interval.spec.js */
describe('CounterController', function () {
    var $controller, $interval, $scope;

    beforeEach(function () {
        angular.mock.module('demoApp.interval');
        angular.mock.inject(function (_$controller_, 
            _$interval_, 
            _$rootScope_) {
            $controller = _$controller_;
            $interval = _$interval_;
            $scope = _$rootScope_.$new();
        });
    });

    it('should register the intervals', function () {

        var intervalSpy = jasmine.createSpy('$interval', $interval);

        var counterController = $controller('CounterController',
            { $scope: $scope, $interval: intervalSpy });

        counterController.start();

        /* Assertions */
        expect(intervalSpy).toHaveBeenCalled();

        expect(intervalSpy).toHaveBeenCalledWith(
            counterController.counterFunction,
            1000,
            10);
    });

    it('should add 1 to counter every second', function () {

        // Note that we've added .and.callThough();
        var intervalSpy = jasmine.createSpy('$interval', $interval)
            .and.callThrough();

        // we need to register a spy for $interval's cancel function.
        spyOn(intervalSpy, 'cancel');

        var counterController = $controller('CounterController',
            { $scope: $scope, $interval: intervalSpy });

        
        counterController.start();

        // advance in time by 1 second from call to start()
        $interval.flush(1100);
        expect(counterController.counter).toBe(1);


        // advance in time by 4 second from call to start()
        $interval.flush(3000);
        expect(counterController.counter).toBe(4);

        counterController.cancel();
        expect(intervalSpy.cancel.calls.count()).toBe(1);
    });

});