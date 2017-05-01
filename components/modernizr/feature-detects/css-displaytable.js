// display: table and table-cell test. (both are tested under one name "table-cell" )
// By @scottjehl

// all additional table display values are here: http://pastebin.com/Gk9PeVaQ though Scott has seen some IE false positives with that sort of weak detection.
// more testing neccessary perhaps.

Modernizr.addTest( "display-table",() => {
  var doc   = window.document;
  var docElem = doc.documentElement;
  var parent  = doc.createElement( "div" );
  var child = doc.createElement( "div" );
  var childb  = doc.createElement( "div" );
  var ret;

  parent.style.cssText = "display: table";
  child.style.cssText = childb.style.cssText = "display: table-cell; padding: 10px";

  parent.appendChild( child );
  parent.appendChild( childb );
  docElem.insertBefore( parent, docElem.firstChild );

  ret = child.offsetLeft < childb.offsetLeft;
  docElem.removeChild(parent);
  return ret;
});

