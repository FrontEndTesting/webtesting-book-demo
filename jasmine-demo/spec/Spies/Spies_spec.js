describe('Spies Test', function () {
    it('for spyOn against CarAssemble function', function () {
        var fake = new CarAssemble();
        // Replace addWheel function with a spy
        spyOn(fake, 'addWheel');
        // Replace addEngine function with another spy
        spyOn(fake, 'addEngine');

        fake.assemble();

        expect(fake.addWheel).toHaveBeenCalled();
        expect(fake.addWheel).toHaveBeenCalledTimes(4);
        expect(fake.addEngine).toHaveBeenCalledWith('V8');

        expect(fake.addWheel.calls.any()).toEqual(true);
        expect(fake.addWheel.calls.count()).toEqual(4);
    });

    it('for spyOn when configured to call through', function () {
        var fake = new CarAssemble();
        spyOn(fake, 'addEngine').and.callThrough();

        fake.assemble();

        expect(fake.addEngine).toHaveBeenCalled();
        expect(fake.engine).toBe('V8');
    });

    it('for spyOn when configured to fake a return value', function () {
        var engineSupplier = {
            getEngine: function () {
                return 'V8';
            }
        };

        spyOn(engineSupplier, 'getEngine').and.returnValue('V6');
        var val = engineSupplier.getEngine();
        expect(val).toBe('V6');
        expect(val).not.toBe('V8');
    });


    it('for spyOn when configured to fake a series of return values', function () {
        var engineSupplier = {
            getEngine: function () {
                return 'V8';
            }
        };

        spyOn(engineSupplier, 'getEngine').and.returnValues('V6', 'V4');
        expect(engineSupplier.getEngine()).toBe('V6');
        expect(engineSupplier.getEngine()).toBe('V4');
        expect(engineSupplier.getEngine()).toBeUndefined();
    });

    it('for spyOn when configured to throw an error', function () {
        var engineSupplier = {
            getEngine: function () {
                return 'V8';
            }
        };

        spyOn(engineSupplier, 'getEngine').and.throwError('broken engine');
        expect(function () {
            engineSupplier.getEngine();
        }).toThrowError('broken engine');
    });

    it('can fake a value and then stub in the same spec', function () {
        var engineSupplier = {
            getEngine: function () {
                return 'V8';
            }
        };

        spyOn(engineSupplier, 'getEngine').and.returnValue('V6');
        expect(engineSupplier.getEngine()).toBe('V6');

        engineSupplier.getEngine.and.stub();
        expect(engineSupplier.getEngine()).toBeUndefined();
    });

    it('for spyOn when configured with an alternate implementation', function () {
        var engineSupplier = {
            getEngine: function () {
                return 'V8';
            }
        };

        var fakeEngine = function () {
            return 'Faked Engine';
        };

        spyOn(engineSupplier, 'getEngine').and.callFake(fakeEngine);
        expect(engineSupplier.getEngine()).toBe('Faked Engine');
    });

    it('for a spy, when created manually', function () {
        var engine = jasmine.createSpy('Named Engine');

        engine('Faked Engine');
        expect(engine).toHaveBeenCalled();
        expect(engine).toHaveBeenCalledWith('Faked Engine');
    });

    it('for multiple spies, when created manually', function () {
        var engine = jasmine.createSpyObj('Named Engine', ['start', 'stop']);

        engine.start();
        engine.stop();

        expect(engine.start).toBeDefined();
        expect(engine.stop).toBeDefined();

        expect(engine.start).toHaveBeenCalled();
        expect(engine.start).toHaveBeenCalled();

    });

});

