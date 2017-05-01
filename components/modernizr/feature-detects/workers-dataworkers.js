// by jussi-kalliokoski


// This test is asynchronous. Watch out.

// The test will potentially add garbage to console.

((() => {
  try {
    var data    = 'Modernizr';
    var worker  = new Worker('data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=');

    worker.onmessage = e => {
      worker.terminate();
      Modernizr.addTest('dataworkers', data === e.data);
      worker = null;
    };

    // Just in case...
    worker.onerror = () => {
      Modernizr.addTest('dataworkers', false);
      worker = null;
    };

    setTimeout(() => {
        Modernizr.addTest('dataworkers', false);
    }, 200);

    worker.postMessage(data);
  } catch (e) {
    Modernizr.addTest('dataworkers', false);
  }
})());
