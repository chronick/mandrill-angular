// https://github.com/Modernizr/Modernizr/issues/572
// http://jsfiddle.net/FWeinb/etnYC/
Modernizr.addTest('cssvwunit', () => {
    var bool;
    Modernizr.testStyles("#modernizr { width: 50vw; }", (elem, rule) => {
        var width = parseInt(window.innerWidth/2,10);

        var compStyle = parseInt((window.getComputedStyle ?
                  getComputedStyle(elem, null) :
                  elem.currentStyle)["width"],10);

        bool= (compStyle == width);
    });
    return bool;
});
