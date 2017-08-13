describe('Built in matchers:', function () {

    it('toBe', function () {
        var a = {};
        var b = a;
        var c = {};

        expect(a).toBe(b);
        expect(a).not.toBe(c);
    });

    it('toMatch is for regular expressions', function () {
        var message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/)
    });

    it('toBeDefined', function () {
        var a = {
            foo: 'foo'
        };

        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });

    it('toBeUndefined', function () {
        var a = {
            foo: 'foo'
        };

        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
    });

    it('toBeNull', function () {
        var a = null;
        var foo = 'foo';

        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });

    it('toBeTruthy', function () {
        var a, foo = 'foo';

        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it('toBeFalsy', function () {
        var a, foo = 'foo';

        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });


    describe('toContain', function () {
        it('finds an item in an Array', function () {
            var a = ['foo', 'bar', 'baz'];

            expect(a).toContain('bar');
            expect(a).not.toContain('quux');
        });

        it('finds a substring', function () {
            var a = 'foo bar baz';

            expect(a).toContain('bar');
            expect(a).not.toContain('quux');
        });
    });

    describe('toEqual', function () {

        it('works for simple literals and variables', function () {
            var a = 12;
            expect(a).toEqual(12);
        });

        it('works for objects', function () {
            var foo = {
                a: 12,
                b: 41
            };
            var bar = {
                a: 12,
                b: 41
            };
            expect(foo).toEqual(bar);
        });
    });


    it('toBeCloseTo', function () {
        var a = 3.78,
            b = 3.76;

        expect(a).not.toBeCloseTo(b, 2);
        expect(a).toBeCloseTo(b, 1);
    });

    it('toBeGreaterThan', function () {
        var a = 3.78,
            b = 3.76;

        expect(a).toBeGreaterThan(b);
        expect(b).not.toBeGreaterThan(a);
    });

    it('toBeNaN', function () {
        expect(0 / 0).toBeNaN();
        expect(parseInt('foo')).toBeNaN();
        expect(5).not.toBeNaN();
    });

    it('toThrow', function () {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function () {
            return a + 1;
        };

        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });

  it('toThrowError is for testing a specific thrown exception', function() {
    var foo = function() {
      throw new TypeError("foo bar baz");
    };

    expect(foo).toThrowError("foo bar baz");
    expect(foo).toThrowError(/bar/);
    expect(foo).toThrowError(TypeError);
    expect(foo).toThrowError(TypeError, "foo bar baz");
  });    

})