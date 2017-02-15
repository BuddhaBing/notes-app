
(function(exports){
  var pass = 0;
  var fail = 0;
  var tests = 0;
  var myresult = "";

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

  function HasContent(website, result, answer = "expected website to contain: "+result) {
    document.write("<div id='"+toString(tests)+"'>&nbsp&nbsp&nbsp&nbspWaiting for test "+tests+" result!</div>")
    document.write("<iframe id='iframe01' height='0' width='0' src=" + website + "></iframe>");
    document.getElementById('iframe01').onload = function() {
        var content = document.getElementById('iframe01').contentWindow.document.body.innerHTML
        if (content.includes(result)) {
            myresult = true;
            return true;
        } else {
            myresult = answer;
            return answer;
        }
    }
  }

  function output (title, result) {
    var css = "";
    if (result!==true){css="in"; fail++;}else{pass++;}
    var output = "<div id='"+css+"correct'>&nbsp&nbsp&nbsp&nbsp"+title+"</div>";
    return output;
  }

  function it(title, passFunction){
    tests++;
    var result = passFunction();
    if (typeof(result) === 'undefined') {
      var checkExist = setInterval(function() {
        clearInterval(checkExist);
        document.getElementById(toString(tests)).innerHTML = output(title, myresult);
        document.getElementById('testResults').innerHTML = "Pass = " + pass + " Fail = " + fail
      }, 500);
    } else {
      document.write(output(title, result));
    }
  }

  function initiate(){
    document.write("<div id='testResults'>Pass = 0 Fail = 0</div>");
  }

  function describe (title, passFunction) {
    document.write("<b>"+title+"</b>");
    passFunction();
    displayResult();
  }

  function displayResult(){
    document.write("<script>document.getElementById('testResults').innerHTML = 'Pass = "+ pass +" Fail = "+ fail +"'</script>");
  }

  initiate();

  exports.assert = {}
  exports.assert.Equals = Equals;
  exports.assert.NotEquals = NotEquals;
  exports.assert.GreaterThan = GreaterThan;
  exports.assert.LessThan = LessThan;
  exports.assert.Contains = Contains;
  exports.assert.HasContent = HasContent;

  exports.it = it
  exports.describe = describe

})(this)
