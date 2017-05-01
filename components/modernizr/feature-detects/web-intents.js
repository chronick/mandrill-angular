// Tests for the ability to use Web Intents (http://webintents.org).
// By Eric Bidelman

Modernizr.addTest('webintents', () => !!Modernizr.prefixed('startActivity', navigator));
