var customMatchers = {
    isBetween: function(util, customEqualityTesters){
        return {
            compare:function(actual, min, max) {
                var result = {
                    pass: false,
                    message: 'Expected ' + actual + ' is not between ' 
                        + min + ' and ' + max
                };
                
                if(actual >= min && actual <= max){
                    result.pass = true;
                     result.message = 'Expected ' + actual + ' is between ' 
                        + min + ' and ' + max;;
                }

                return result;
            }          
        };
    }
};

describe('Custom matcher Test', function() {
    beforeEach(function() { 
        jasmine.addMatchers(customMatchers);
    });
    
    
    it('against isBetween', function(){
       expect(8).isBetween(4, 10); 
    });
       
});