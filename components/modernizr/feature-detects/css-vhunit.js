// https://github.com/Modernizr/Modernizr/issues/572
// Similar to http://jsfiddle.net/FWeinb/etnYC/
Modernizr.addTest('cssvhunit', () => {
    var bool;
    Modernizr.testStyles("#modernizr { height: 50vh; }", (elem, rule) => {
        var height = parseInt(window.innerHeight/2,10);

        var compStyle = parseInt((window.getComputedStyle ?
                  getComputedStyle(elem, null) :
                  elem.currentStyle)["height"],10);

        bool= (compStyle == height);
    });
    return bool;
});