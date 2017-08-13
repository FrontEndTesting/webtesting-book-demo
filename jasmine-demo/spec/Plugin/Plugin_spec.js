describe('Jasmine Plugin Test', function () {
    describe('jasmine-ajax', function () {

        beforeEach(function () {
            jasmine.Ajax.install();
        });
        afterEach(function () {
            jasmine.Ajax.uninstall();
        });

        it('should specify response when you need it', function () {
            var doneFn = jasmine.createSpy('success');

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState == this.DONE) {
                    doneFn(this.responseText);
                }
            };

            xhr.open('GET', '/site/test/url');
            xhr.send();

            var request = jasmine.Ajax.requests.mostRecent();
            expect(request.url).toBe('/site/test/url');
            expect(doneFn).not.toHaveBeenCalled();

            request.respondWith({
                'status': 200,
                'contentType': 'text/plain',
                'responseText': 'awesome response'
            });

            expect(doneFn).toHaveBeenCalledWith('awesome response');
        });

        it('should allow responses to be setup ahead of time', function () {
            var doneFn = jasmine.createSpy('success');

            jasmine.Ajax.stubRequest('/another/url').andReturn({
                'responseText': 'immediate response'
            });

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState == this.DONE) {
                    doneFn(this.responseText);
                }
            };

            xhr.open('GET', '/another/url');
            xhr.send();

            expect(doneFn).toHaveBeenCalledWith('immediate response');
        });


    });

    describe('setFixtures', function () {
        beforeEach(function () {
            setFixtures('<div id="container"></div><button id="btn" onclick="changeContainerText()">Click</button>');
        });

        it('container should have hello world text', function () {
            expect($('#btn')).toExist();
            $('#btn').trigger('click');
            expect($('#container')).toHaveText('hello world');

        });
    });

    describe('loadFixtures', function () {
        beforeEach(function () {
            var path = '';
            if (typeof window.__karma__ !== 'undefined') {
                path += 'base';
            }

            jasmine.getFixtures().fixturesPath = path + '/spec/Fixtures';
            loadFixtures('PluginFixture.html');
        });

        it('container should have hello world text', function () {
            expect($('#btn')).toExist();
            $('#btn').trigger('click');
            expect($('#container')).toHaveText('hello world');
        });
    });

});