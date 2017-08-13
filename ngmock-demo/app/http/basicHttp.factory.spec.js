/* basicHttp.factory.spec.js */

describe('basicHttpFactory ', function () {
    var basicHttpFactory, $httpBackend;
    var $http;

    beforeEach(function () {
        angular.mock.module('demoApp.http');

        angular.mock.inject(function (_basicHttpFactory_, _$httpBackend_, _$http_) {
            basicHttpFactory = _basicHttpFactory_;
            $httpBackend = _$httpBackend_;
            $http = _$http_;
        });
    });

    it('getProductName should get mocked data successfully', function () {
        var result;
        var url = 'http://localhost/foo/productinfo.json';
        $httpBackend
            .when('GET', url)
            .respond(200, { name: 'foo' });

        $httpBackend.expect('GET', url);
        var promise = basicHttpFactory.getProductName(url);
        promise.then(function (data) {
            result = data;
        });

        expect($httpBackend.flush).not.toThrow();

        expect(result).toEqual('foo');
    });

    it('should demonstrate using expect in sequence', function () {

        $httpBackend.expect('GET', 'http://localhost/1').respond(200);
        $httpBackend.expect('GET', 'http://localhost/2').respond(200);
        $httpBackend.expect('GET', 'http://localhost/2').respond(200);
        $httpBackend.expect('GET', 'http://localhost/3').respond(200);

        $httpBackend
            .when('GET', function (url) {
                return url.indexOf('http://localhost/') !== -1;
            })
            .respond(200, { name: 'foo' });


        /* Code under test */
        $http.get('http://localhost/1');
        $http.get('http://localhost/2');
        $http.get('http://localhost/2');
        $http.get('http://localhost/3');
        $http.get('http://localhost/3');
        /* End */

        expect($httpBackend.flush).not.toThrow();
    });

    it('should post data (object)', function () {

        var result;

        /* Code Under Test */
        $http.post('http://localhost/api/products', {
            name: 'bob',
            description: 'bob_description'
        }).then(function (response) {
            result = response.status;
        });
        /* End Code */

        $httpBackend
            .when('POST', 'http://localhost/api/products', {
                name: 'bob',
                description: 'bob_description'
            })
            .respond(201);

        $httpBackend.flush();

        expect(result).toEqual(201);

    });

    it('should post data (function)', function () {

        var result;

        /* Code Under Test */
        $http.post('http://localhost/api/products', {
            name: 'bob',
            description: 'bob_description'
        }).then(function (response) {
            result = response.status;
        });
        /* End Code */

        $httpBackend
            .when('POST', 'http://localhost/api/products'
            , function (data) {
                return angular.fromJson(data).name === 'bob';
            }).respond(201);

        $httpBackend.flush();

        expect(result).toEqual(201);
    });

    it('should use Object headers', function () {
        var result;

        /* code under test */
        $http.get('http://localhost/foo/productinfo.json', {
            headers: { 'myHeader': 'products' }
        })
            .then(function (response) {
                result = response.data;
            });
        /* end */

        $httpBackend
            .when('GET', 'http://localhost/foo/productinfo.json', undefined, {
                myHeader: 'products',
                Accept: 'application/json, text/plain, */*'
            })
            .respond(200, { name: 'foo' });

        $httpBackend.flush();

        expect(result).toEqual({ name: 'foo' });

    });

    it('should use Function headers', function () {
        var result;

        /* code under test */
        $http.get('http://localhost/foo/productinfo.json', {
            headers: { 'myHeader': 'products' }
        })
            .then(function (response) {
                result = response.data;
            });
        /* end */

        $httpBackend
            .when('GET', 'http://localhost/foo/productinfo.json',
            undefined,
            function (headers) {
                return headers.myHeader === 'products';
            })
            .respond(200, { name: 'foo' });

        $httpBackend.flush();

        expect(result).toEqual({ name: 'foo' });
    });

    it('should use respond params', function () {
        var result;

        /* code under test */
        $http.get('http://localhost/foo/productinfo.json')
            .then(function (response) {
                result = response.data;
            });
        /* end */

        $httpBackend
            .when('GET', /localhost\/(.+)\/productinfo.json/,
            undefined,
            undefined,
            ['name']
            )
            .respond(function (method, url, data, headers, params) {
                return [200, { name: params.name }];
            });

        $httpBackend.flush();

        expect(result).toEqual({ name: 'foo' });
    });

    // make sure no expectations were missed in your tests.
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});