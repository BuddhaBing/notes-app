describe("Test suite 1", function() {

  beforeEach(function(){
    var one = new Note("Hello");

  });

  it('returns HELLO', function(){

    return assert.Equals(returnTrue(),"HELLO");

  });

  it('returns 1', function(){

    return assert.Equals(returnTrue(),1);

  });

  it('array contains element bean', function(){

    return assert.Contains(array(),"bean");

  });
});

describe("Test suite 2", function() {

  beforeEach(function(){
    var one = new Note("Goodbye");

  });


  it('returns HELLO', function(){

    return assert.Equals(returnTrue(),"HELLO");

  });

  it('returns 1', function(){

    return assert.Equals(returnTrue(),1);

  });

  it('array contains element bean', function(){
    return assert.Contains(array(),"bean");

  });

  it('checks website', function(i){
    return assert.HasContent(i, "YES");
  },"test.html");

  it('checks website', function(i){
    return assert.HasContent(i, "NO");
  },"test.html");

  it('checks website', function(i){
    return assert.HasContent(i, "THE");
  },"test.html");

  it('clicks button', function(i){
    return assert.HasElement(i, "BUTTON", "NO!!");
  },"test.html");

  it('clicks button', function(i){
    return assert.HasElement(i, "submit", "NO!!");
  },"test.html");
});
