// code.google.com/speed/webp/
// by rich bradshaw, ryan seddon, and paul irish


// This test is asynchronous. Watch out.

((() => {

  var image = new Image();

  image.onerror = () => {
      Modernizr.addTest('webp', false);
  };  
  image.onload = () => {
      Modernizr.addTest('webp', () => image.width == 1);
  };

  image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';

})());