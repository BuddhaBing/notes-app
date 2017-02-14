function test() {}

test.Equals = function(passFunction, result, answer = "expected " + passFunction + " to equal " + result) {
    if (passFunction === result) {
        return true;
    } else {
        return answer;
    }
};

test.NotEquals = function(passFunction, result, answer = "expected " + passFunction + " not to equal " + result) {
    if (passFunction !== result) {
        return true;
    } else {
        return answer;
    }
};

test.GreaterThan = function(passFunction, result, answer = "expected " + passFunction + " to be greater than " + result) {
    if (passFunction > result) {
        return true;
    } else {
        return answer;
    }
};

test.LessThan = function(passFunction, result, answer = "expected " + passFunction + " to be less than " + result) {
    if (passFunction < result) {
        return true;
    } else {
        return answer;
    }
};

test.Contains = function(passFunction, result, answer = "expected " + passFunction + " to contain " + result) {
    if (passFunction.includes(result)) {
        return true;
    } else {
        return answer;
    }
};

test.HasContent = function(website, result, answer = "WRONG") {

    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("test-page").innerHTML = '<object id="htmlObject" type="text/html" data="src/test.htm" ></object>';

        var content = document.getElementById('testing');//.contentWindow.document.getElementById('testing').innerHTML;
        console.log(content.innerHTML);
        if (content.match("THE")) {
            console.log(true);
            return true;
        } else {
            console.log(answer);
            return answer;
        }

    });
    //
    // window.onload = function (evt) {
    // var obj;
    // if (document.getElementById && (obj =
    // document.getElementById('htmlObject'))) {
    // var objDoc;
    // if (obj.contentDocument) {
    // objDoc = obj.contentDocument;
    // }
    // else if (obj.object) {
    // objDoc = obj.object;
    // }
    // if (objDoc && objDoc.body) {
    // alert(objDoc.body.innerHTML);
    // }
    // }
    // };
    // function load_home() {
    //
    // }
    //
    // load_home();

    // var frame = document.getElementById('your-frame-id');
    //
    // document.write("<iframe id='iframe01' height='100' width='100' src='src/test.htm'></iframe>");
    //
    // document.getElementById('iframe01').onload = function() {
    //     // var content = document.getElementById('iframe01').contentWindow.document.getElementById('testing').innerHTML
    //     var frame = document.getElementById('iframe01');
    //
    //
        // console.log(content);

    //     frame.contentWindow.postMessage(matchContent(), '*');
    // }
};

test.output = function(title, result) {
    var css = "";
    if (result !== true) {
        css = "in";
        counter.fail++;
    } else {
        counter.pass++;
    }
    var output = "<div id='" + css + "correct'>&nbsp&nbsp&nbsp&nbsp" + title + ": " + result + "</div>";
    return output;
};

this.it = function(title, passFunction) {
    var result = passFunction();
    document.write(test.output(title, result));
};

this.describe = function(title, passFunction) {
    counter = (typeof counter != 'undefined') ? counter : new Counter();
    document.write("<b>" + title + "</b>");
    passFunction();
    this.displayResult();
};

this.displayResult = function() {
    document.write("<script>document.getElementById('testResults').innerHTML = 'Pass = " + counter.pass + " Fail = " + counter.fail + "'</script>");
};

function Counter() {
    document.write("<div id='testResults'>Pass = 0 Fail = 0</div>");
    this.pass = 0;
    this.fail = 0;
}
