$(() => {

    module("bootstrap-collapse")

      test("should provide no conflict", () => {
        var collapse = $.fn.collapse.noConflict()
        ok(!$.fn.collapse, 'collapse was set back to undefined (org value)')
        $.fn.collapse = collapse
      })

      test("should be defined on jquery object", () => {
        ok($(document.body).collapse, 'collapse method is defined')
      })

      test("should return element", () => {
        ok($(document.body).collapse()[0] == document.body, 'document.body returned')
      })

      test("should show a collapsed element", () => {
        var el = $('<div class="collapse"></div>').collapse('show')
        ok(el.hasClass('in'), 'has class in')
        ok(/height/.test(el.attr('style')), 'has height set')
      })

      test("should hide a collapsed element", () => {
        var el = $('<div class="collapse"></div>').collapse('hide')
        ok(!el.hasClass('in'), 'does not have class in')
        ok(/height/.test(el.attr('style')), 'has height set')
      })

      test("should not fire shown when show is prevented", () => {
        $.support.transition = false
        stop()
        $('<div class="collapse"/>')
          .bind('show', e => {
            e.preventDefault();
            ok(true);
            start();
          })
          .bind('shown', () => {
            ok(false);
          })
          .collapse('show')
      })

      test("should reset style to auto after finishing opening collapse", () => {
        $.support.transition = false
        stop()
        $('<div class="collapse" style="height: 0px"/>')
          .bind('show', function () {
            ok(this.style.height == '0px')
          })
          .bind('shown', function () {
            ok(this.style.height == 'auto')
            start()
          })
          .collapse('show')
      })

      test("should add active class to target when collapse shown", () => {
        $.support.transition = false
        stop()

        var target = $('<a data-toggle="collapse" href="#test1"></a>')
          .appendTo($('#qunit-fixture'))

        var collapsible = $('<div id="test1"></div>')
          .appendTo($('#qunit-fixture'))
          .on('show', () => {
            ok(!target.hasClass('collapsed'))
            start()
          })

        target.click()
      })

      test("should remove active class to target when collapse hidden", () => {
        $.support.transition = false
        stop()

        var target = $('<a data-toggle="collapse" href="#test1"></a>')
          .appendTo($('#qunit-fixture'))

        var collapsible = $('<div id="test1" class="in"></div>')
          .appendTo($('#qunit-fixture'))
          .on('hide', () => {
            ok(target.hasClass('collapsed'))
            start()
          })

        target.click()
      })

})