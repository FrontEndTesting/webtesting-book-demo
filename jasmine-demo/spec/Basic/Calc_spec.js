/* Calc_spec.js */
describe('Calculator', function () {
    var calc;

    beforeAll(function () {
        //Arrange
        calc = new Calculator();
    });

    describe('Test Add', function () {
        it('add 1 and 3 should equal 4', function () {
            //Act
            var result = calc.add(1,3);
            //Assert
            expect(result).toBe(4);
        });
    });
});