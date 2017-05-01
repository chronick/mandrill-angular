$(() => {

    module("bootstrap-transition")

      test("should be defined on jquery support object", () => {
        ok($.support.transition !== undefined, 'transition object is defined')
      })

      test("should provide an end object", () => {
        ok($.support.transition ? $.support.transition.end : true, 'end string is defined')
      })

})