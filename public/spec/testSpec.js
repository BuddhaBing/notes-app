describe("Test suite 1", function() {

  it('returns HELLO', function(){
    return test.Equals(returnTrue(),"HELLO");
  });

  it('returns 1', function(){
    return test.Equals(returnTrue(),1);
  });

  it('array contains element bean', function(){
    return test.Contains(array(),"bean");
  });
});

describe("Test suite 2", function() {

  it('returns HELLO', function(){
    return test.Equals(returnTrue(),"HELLO");
  });

  it('returns 1', function(){
    return test.Equals(returnTrue(),1);
  });

  it('array contains element bean', function(){
    return test.Contains(array(),"bean");
  });

  it('checks website', function(){
    return test.HasContent("test.htm", "THE");
  });
});
