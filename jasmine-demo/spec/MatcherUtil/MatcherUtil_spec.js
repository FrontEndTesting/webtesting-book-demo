describe('Matcher Util Functions', function () {

    describe('jasmine.any', function () {
        it('matches any value', function () {
            expect({}).toEqual(jasmine.any(Object));
            expect(12).toEqual(jasmine.any(Number));
        });
    });

    describe('jasmine.anything', function () {
        it('matches anything', function () {
            expect(1).toEqual(jasmine.anything());
        });
    });

    describe('jasmine.objectContaining', function () {
        var foo;

        beforeEach(function () {
            foo = {
                a: 1,
                b: 2,
                bar: 'baz'
            };
        });

        it('matches objects with the expect key/value pairs', function () {
            expect(foo).toEqual(jasmine.objectContaining({
                bar: 'baz'
            }));
            expect(foo).not.toEqual(jasmine.objectContaining({
                c: 37
            }));
        });

    });

    describe('jasmine.arrayContaining', function () {
        var foo;

        beforeEach(function () {
            foo = [1, 2, 3, 4];
        });

        it('matches arrays with some of the values', function () {
            expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
            expect(foo).not.toEqual(jasmine.arrayContaining([6]));
        });
    });

    describe('jasmine.stringMatching', function () {
        it('matches as a regexp', function () {
            expect({ foo: 'bar' }).toEqual({
                foo: jasmine.stringMatching(/^bar$/)
            });
            expect({ foo: 'foobarbaz' }).toEqual({
                foo: jasmine.stringMatching('bar')
            });
        });
    });

});