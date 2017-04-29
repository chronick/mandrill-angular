// last-child pseudo selector
// https://github.com/Modernizr/Modernizr/pull/304


Modernizr.addTest('lastchild', () => Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", elem => elem.lastChild.offsetWidth > elem.firstChild.offsetWidth, 2));
