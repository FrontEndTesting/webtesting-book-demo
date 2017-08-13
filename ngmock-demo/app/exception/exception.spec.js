/* exception.spec.js */

describe('$exceptionHandler', function () {
    var $log, $exceptionHandler, $timeout;

    beforeEach(function () {
        angular.mock.module(function ($exceptionHandlerProvider) {
            $exceptionHandlerProvider.mode('log');
        });

        angular.mock.inject(function (
            _$log_, 
            _$exceptionHandler_, _$timeout_) {
            $log = _$log_;
            $exceptionHandler = _$exceptionHandler_;
            $timeout = _$timeout_;
        });
    });

    it('should demonstrate exception handling with log mode', function () {
        $timeout(function () { $log.log(1); });
        $timeout(function () { $log.log(2); throw 'banana peel'; });
        $timeout(function () { $log.log(3); });
        expect($exceptionHandler.errors).toEqual([]);
        expect($log.assertEmpty());
        $timeout.flush();
        expect($exceptionHandler.errors[0]).toEqual('banana peel');
        expect($log.log.logs).toEqual([[1], [2], [3]]);
    });

});