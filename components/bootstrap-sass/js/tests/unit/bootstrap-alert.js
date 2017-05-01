$(() => {

    module("bootstrap-alerts")

      test("should provide no conflict", () => {
        var alert = $.fn.alert.noConflict()
        ok(!$.fn.alert, 'alert was set back to undefined (org value)')
        $.fn.alert = alert
      })

      test("should be defined on jquery object", () => {
        ok($(document.body).alert, 'alert method is defined')
      })

      test("should return element", () => {
        ok($(document.body).alert()[0] == document.body, 'document.body returned')
      })

      test("should fade element out on clicking .close", () => {
        var alertHTML = '<div class="alert-message warning fade in">'
          + '<a class="close" href="#" data-dismiss="alert">×</a>'
          + '<p><strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too good.</p>'
          + '</div>';

        var alert = $(alertHTML).alert();

        alert.find('.close').click()

        ok(!alert.hasClass('in'), 'remove .in class on .close click')
      })

      test("should remove element when clicking .close", () => {
        $.support.transition = false

        var alertHTML = '<div class="alert-message warning fade in">'
          + '<a class="close" href="#" data-dismiss="alert">×</a>'
          + '<p><strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too good.</p>'
          + '</div>';

        var alert = $(alertHTML).appendTo('#qunit-fixture').alert();

        ok($('#qunit-fixture').find('.alert-message').length, 'element added to dom')

        alert.find('.close').click()

        ok(!$('#qunit-fixture').find('.alert-message').length, 'element removed from dom')
      })

      test("should not fire closed when close is prevented", () => {
        $.support.transition = false
        stop();
        $('<div class="alert"/>')
          .bind('close', e => {
            e.preventDefault();
            ok(true);
            start();
          })
          .bind('closed', () => {
            ok(false);
          })
          .alert('close')
      })

})