describe('Asymmetry Match', function() {
  var tester = {
    asymmetricMatch: function(actual) {
      var secondValue = actual.split(',')[1];
      return secondValue === 'bar';
    }
  };

  it('dives in deep', function() {
    expect('foo,bar,baz,quux').toEqual(tester);
  });
});