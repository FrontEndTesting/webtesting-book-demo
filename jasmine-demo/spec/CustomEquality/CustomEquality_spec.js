

describe('Custom Equality Test', function () {

    var duckCustomEquality = function (first, second) {

        return first.canSwim == second.canSwim && first.canWalk == second.canWalk &&
            first.color == second.color;
    };

    beforeEach(function () {
        jasmine.addCustomEqualityTester(duckCustomEquality);
    });


    it('against Duck class', function () {
        var d = {
            canSwim: true,
            canWalk: true,
            canClimb: true,
            color: 'white',
            canFly: true
        };

        var duck = new Duck();
        expect(d).toEqual(duck);

        d.canSwim = false;
        expect(d).not.toEqual(duck);
    });
});