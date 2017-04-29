$(() => {

    module("bootstrap-affix")

      test("should provide no conflict", () => {
        var affix = $.fn.affix.noConflict()
        ok(!$.fn.affix, 'affix was set back to undefined (org value)')
        $.fn.affix = affix
      })

      test("should be defined on jquery object", () => {
        ok($(document.body).affix, 'affix method is defined')
      })

      test("should return element", () => {
        ok($(document.body).affix()[0] == document.body, 'document.body returned')
      })

      test("should exit early if element is not visible", () => {
        var $affix = $('<div style="display: none"></div>').affix()
        $affix.data('affix').checkPosition()
        ok(!$affix.hasClass('affix'), 'affix class was not added')
      })

})