// By @mathias, based on http://mths.be/axh
Modernizr.addTest('details', () => {
    var doc = document;
    var el = doc.createElement('details');
    var fake;
    var root;
    var diff;
    if (!('open' in el)) { // return early if possible; thanks @aFarkas!
        return false;
    }
    root = doc.body || ((() => {
        var de = doc.documentElement;
        fake = true;
        return de.insertBefore(doc.createElement('body'), de.firstElementChild || de.firstChild);
    })());
    el.innerHTML = '<summary>a</summary>b';
    el.style.display = 'block';
    root.appendChild(el);
    diff = el.offsetHeight;
    el.open = true;
    diff = diff != el.offsetHeight;
    root.removeChild(el);
    fake && root.parentNode.removeChild(root);
    return diff;
});