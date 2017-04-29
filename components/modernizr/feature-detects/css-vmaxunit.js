// https://github.com/Modernizr/Modernizr/issues/572
// http://jsfiddle.net/glsee/JDsWQ/4/
Modernizr.addTest('cssvmaxunit', () => {
    var bool;
    Modernizr.testStyles("#modernizr { width: 50vmax; }", (elem, rule) => {
        var one_vw = window.innerWidth/100;
        var one_vh = window.innerHeight/100;

        var compWidth = parseInt((window.getComputedStyle ?
                              getComputedStyle(elem, null) :
                              elem.currentStyle)['width'],10);

        bool = ( parseInt(Math.max(one_vw, one_vh)*50,10) == compWidth );
    });
    return bool;
});