/*
    https://developer.mozilla.org/en/CSS/background-position
    http://www.w3.org/TR/css3-background/#background-position

    Example: http://jsfiddle.net/Blink/bBXvt/
*/

((() => {
    var elem = document.createElement('a');
    var eStyle = elem.style;
    var val = "right 10px bottom 10px";

    Modernizr.addTest('bgpositionshorthand', () => {
        eStyle.cssText = "background-position: " + val + ";";
        return (eStyle.backgroundPosition === val);
    });
})());
