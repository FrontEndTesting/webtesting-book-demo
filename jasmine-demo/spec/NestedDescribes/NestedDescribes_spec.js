describe('Jasmine Execution Sequence', function () {
    beforeAll(function () {
        console.log('outer beforeAll');
    });
    beforeEach(function () {
        console.log('outer beforeEach');
    });
    it('spec 1', function () {
        console.log('spec 1');
    });
    console.log('statement 1');
    describe('inner', function () {
        beforeAll(function () {
            console.log('inner beforeAll');
        });
        afterAll(function () {
            console.log('inner afterAll');
        });
        console.log('statement 3');
        beforeEach(function () {
            console.log('inner beforeEach');
        });
        it('spec 3', function () {
            console.log('spec 3');
        });
        afterEach(function () {
            console.log('inner afterEach');
        });
    });
    it('spec 2', function () {
        console.log('spec 2');
    });
    console.log('statement 2');
    afterEach(function () {
        console.log('outer afterEach');
    });
    afterAll(function () {
        console.log('outer afterAll');
    });
});