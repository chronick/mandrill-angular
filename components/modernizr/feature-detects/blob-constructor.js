// Blob constructor
// http://dev.w3.org/2006/webapi/FileAPI/#constructorBlob

Modernizr.addTest('blobconstructor', () => {
    try {
        return !!new Blob();
    } catch (e) {
        return false;
    }
});
