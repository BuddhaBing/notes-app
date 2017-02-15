(function(exports) {

    var fill_in = function(inputField, text) {
        document.getElementById(inputField).value = text;
    }

    exports.fill_in = fill_in
})(this)
