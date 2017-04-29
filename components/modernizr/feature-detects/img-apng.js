// Animated PNG
// http://en.wikipedia.org/wiki/APNG
// By Addy Osmani
((() => {
    if (!Modernizr.canvas) return false;

    var image = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');


    image.onload = () => {
        Modernizr.addTest('apng', () => {
            if (typeof canvas.getContext == 'undefined') {
                return false;
            } else {
                ctx.drawImage(image, 0, 0);
                return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
            }
        });
    };

    image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==";
})());
