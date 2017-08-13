/* Engine_spec.js */
describe('Engine', function () {
    // Disable this suite becaues it requires DOM in SpecRunner.html 
    // which does not exist in Karma
    xdescribe('UI Tests', function () {
        var engine, el;
        beforeEach(function (done) {
            el = $('#fade-div');
            engine = new Engine(el);
            engine.start(function () {
                done();
            });            
        });

        it('should work with a visual effect', function () {
            expect(el.css("display")).toBe("none");
        });
    });

    describe('Clock Tests', function () {

        beforeEach(function () {
            jasmine.clock().install();
        });
        afterEach(function () {
            jasmine.clock().uninstall();
        });

        it('should callback after 10 seconds', function () {
            var engine = new Engine();
            var timerCallback = jasmine.createSpy("timerCallback");

            engine.pause10seconds(timerCallback);

            jasmine.clock().tick(8000);
            expect(timerCallback).not.toHaveBeenCalled();
            jasmine.clock().tick(2050);
            expect(timerCallback).toHaveBeenCalled();
        });
    });
});



