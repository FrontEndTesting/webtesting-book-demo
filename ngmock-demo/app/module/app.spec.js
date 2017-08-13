describe('angular.mock.module', function () {
    it('should load module with string argument', function () {
        angular.mock.module('demoApp.module');
        angular.mock.module('helperModule');

    });

    it('should load module with anonymous function', function () {
        angular.mock.module(function ($provide) {
            $provide.constant('apiUrl', 'http://www.example.com/api');
            // We could register other provider services here... e.g.
            // $provide.value('apiKey', 'apisecret');
        });

        expect(true).toBe(true);
    });

    it('should load module with object', function () {
        angular.mock.module({
            'apiKey': 'apisecret',
            'basicService': { 
                changeMessage: function (msg) { 
                    return msg + '!!!'; 
                } 
            }
        });

        expect(true).toBe(true);
    });
}); 