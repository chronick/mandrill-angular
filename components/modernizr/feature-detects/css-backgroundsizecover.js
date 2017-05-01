
// developer.mozilla.org/en/CSS/background-size

Modernizr.testStyles( '#modernizr{background-size:cover}', elem => {
	var style = window.getComputedStyle ?
		window.getComputedStyle( elem, null )
		: elem.currentStyle;
		
	Modernizr.addTest( 'bgsizecover', style.backgroundSize == 'cover' );
});