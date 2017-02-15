
(function(exports){
  var pass = 0;
  var fail = 0;
  var testNumber = 0;
  var myResult = [];
  var myTest = [];
  var myTitle = [];
  var itFunctions = [];
  var befores = {};

  function Equals(passFunction, result, answer="expected " + passFunction + " to equal " + result) {
    if (passFunction===result){return true;}else{return answer;}
  }

  function NotEquals(passFunction, result, answer="expected " + passFunction + " not to equal " + result) {
    if (passFunction!==result){return true;}else{return answer;}
  }

  function GreaterThan(passFunction, result, answer="expected " + passFunction + " to be greater than " + result) {
    if (passFunction > result){return true;}else{return answer;}
  }

  function LessThan(passFunction, result, answer="expected " + passFunction + " to be less than " + result) {
    if (passFunction < result){return true;}else{return answer;}
  }

  function Contains(passFunction, result, answer="expected " + passFunction + " to contain " + result) {
    if (passFunction.includes(result)){return true;}else{return answer;}
  }

  function createFrame(website){
    document.write("<div id='test"+testNumber+"'>&nbsp&nbsp&nbsp&nbspWaiting Results!"+(testNumber)+"</div>");
    document.write("<iframe id='iframe"+testNumber+"' height='0' width='0' src=" + website + "></iframe>");
    return document.getElementById('iframe'+testNumber)
  }

  function getResultFrame(i){
    console.log(i)
//    var i = myTest.indexOf(number);
//    console.log(myTest.indexOf(i))
    console.log(document.getElementById("test"+myTest[i]))
    return document.getElementById("test"+myTest[i])
  }
  function getFrame(i){
    return document.getElementById('iframe'+i)
  }

  function HasContent(testNumber, result, answer = "expected website to contain: "+result) {
    var content = getFrame(testNumber).innerHTML
    myTest.push(testNumber);
    if (content.includes(result)) {
      myResult.push(true);
    } else {
      myResult.push(answer);
    }
  }

  function HasElement(testNumber, element, answer = "expected click on button: "+element){
    var element = getFrame(testNumber).innerHTML
    myTest.push(testNumber);
    if (element) {
      myResult.push(true);
    } else {
      myResult.push(answer);
    }
  }

  function output (title, result) {
    var css = "";
    if (result!==true){css="in"; fail++;}else{pass++;}
    var output = "<div id='"+css+"correct'>&nbsp&nbsp&nbsp&nbsp"+title+": "+result+"</div>";
    return output;
  }

  function it(title, passFunction, website){
    testNumber++;
    beforeEachCaller();
    if(website){
      createFrame(website).onload = function(targeter){
        target = targeter.currentTarget;
        test = parseInt(target.id.slice(6, target.id.length));
        var result = passFunction(test)
        //close the frame
        //update results
        delayedAnswer(test);
      }
      return
    }
    var result = passFunction();
    document.write(output(title, result));
  }


  function initiate(){
    document.write("<div id='testResults'>Pass = 0 Fail = 0</div>");
  }

  function delayedAnswer(number){
    var i = myTest.indexOf(number);

    getResultFrame(number).innerHTML = output(myTitle[i], myResult[i]);
    document.getElementById('testResults').innerHTML = "Pass = " + pass + " Fail = " + fail;
  }

  function describe (title, passFunction) {
    clearBefores();
    document.write("<b>"+title+"</b>");
    passFunction();
    displayResult();
  }

  function displayResult(){
    document.write("<script>document.getElementById('testResults').innerHTML = 'Pass = "+ pass +" Fail = "+ fail +"'</script>");
  }

  function beforeEach(beforeEachFunction) {
    befores = beforeEachFunction;
  }

  function beforeEachCaller() {
    if(typeof(befores) === "function") {
      return befores();
    }
  }

  function clearBefores() {
    befores = {};
  }

  initiate();

  exports.assert = {};
  exports.assert.Equals = Equals;
  exports.assert.NotEquals = NotEquals;
  exports.assert.GreaterThan = GreaterThan;
  exports.assert.LessThan = LessThan;
  exports.assert.Contains = Contains;
  exports.assert.HasContent = HasContent;
  exports.assert.HasElement = HasElement;

  exports.beforeEach = beforeEach;
  exports.beforeEachCaller = beforeEachCaller;
  exports.clearBefores = clearBefores;

  exports.it = it;
  exports.describe = describe;

})(this);
