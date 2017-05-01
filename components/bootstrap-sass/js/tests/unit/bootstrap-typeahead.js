$(() => {

    module("bootstrap-typeahead")

      test("should provide no conflict", () => {
        var typeahead = $.fn.typeahead.noConflict()
        ok(!$.fn.typeahead, 'typeahead was set back to undefined (org value)')
        $.fn.typeahead = typeahead
      })

      test("should be defined on jquery object", () => {
        ok($(document.body).typeahead, 'alert method is defined')
      })

      test("should return element", () => {
        ok($(document.body).typeahead()[0] == document.body, 'document.body returned')
      })

      test("should listen to an input", () => {
        var $input = $('<input />')
        $input.typeahead()
        ok($._data($input[0], 'events').blur, 'has a blur event')
        ok($._data($input[0], 'events').keypress, 'has a keypress event')
        ok($._data($input[0], 'events').keyup, 'has a keyup event')
      })

      test("should create a menu", () => {
        var $input = $('<input />')
        ok($input.typeahead().data('typeahead').$menu, 'has a menu')
      })

      test("should listen to the menu", () => {
        var $input = $('<input />');
        var $menu = $input.typeahead().data('typeahead').$menu;

        ok($._data($menu[0], 'events').mouseover, 'has a mouseover(pseudo: mouseenter)')
        ok($._data($menu[0], 'events').click, 'has a click')
      })

      test("should show menu when query entered", () => {
        var $input = $('<input />')
            .appendTo('body')
            .typeahead({
              source: ['aa', 'ab', 'ac']
            });

        var typeahead = $input.data('typeahead');

        $input.val('a')
        typeahead.lookup()

        ok(typeahead.$menu.is(":visible"), 'typeahead is visible')
        equals(typeahead.$menu.find('li').length, 3, 'has 3 items in menu')
        equals(typeahead.$menu.find('.active').length, 1, 'one item is active')

        $input.remove()
        typeahead.$menu.remove()
      })

      test("should accept data source via synchronous function", () => {
        var $input = $('<input />').typeahead({
              source() {
                return ['aa', 'ab', 'ac']
              }
            }).appendTo('body');

        var typeahead = $input.data('typeahead');

        $input.val('a')
        typeahead.lookup()

        ok(typeahead.$menu.is(":visible"), 'typeahead is visible')
        equals(typeahead.$menu.find('li').length, 3, 'has 3 items in menu')
        equals(typeahead.$menu.find('.active').length, 1, 'one item is active')

        $input.remove()
        typeahead.$menu.remove()
      })

      test("should accept data source via asynchronous function", () => {
        var $input = $('<input />').typeahead({
              source(query, process) {
                process(['aa', 'ab', 'ac'])
              }
            }).appendTo('body');

        var typeahead = $input.data('typeahead');

        $input.val('a')
        typeahead.lookup()

        ok(typeahead.$menu.is(":visible"), 'typeahead is visible')
        equals(typeahead.$menu.find('li').length, 3, 'has 3 items in menu')
        equals(typeahead.$menu.find('.active').length, 1, 'one item is active')

        $input.remove()
        typeahead.$menu.remove()
      })

      test("should not explode when regex chars are entered", () => {
        var $input = $('<input />').typeahead({
              source: ['aa', 'ab', 'ac', 'mdo*', 'fat+']
            }).appendTo('body');

        var typeahead = $input.data('typeahead');

        $input.val('+')
        typeahead.lookup()

        ok(typeahead.$menu.is(":visible"), 'typeahead is visible')
        equals(typeahead.$menu.find('li').length, 1, 'has 1 item in menu')
        equals(typeahead.$menu.find('.active').length, 1, 'one item is active')

        $input.remove()
        typeahead.$menu.remove()
      })

      test("should hide menu when query entered", () => {
        stop()

        var $input = $('<input />').typeahead({
              source: ['aa', 'ab', 'ac']
            }).appendTo('body');

        var typeahead = $input.data('typeahead');

        $input.val('a')
        typeahead.lookup()

        ok(typeahead.$menu.is(":visible"), 'typeahead is visible')
        equals(typeahead.$menu.find('li').length, 3, 'has 3 items in menu')
        equals(typeahead.$menu.find('.active').length, 1, 'one item is active')

        $input.blur()

        setTimeout(() => {
          ok(!typeahead.$menu.is(":visible"), "typeahead is no longer visible")
          start()
        }, 200)

        $input.remove()
        typeahead.$menu.remove()
      })

      test("should set next item when down arrow is pressed", () => {
        var $input = $('<input />').typeahead({
              source: ['aa', 'ab', 'ac']
            }).appendTo('body');

        var typeahead = $input.data('typeahead');

        $input.val('a')
        typeahead.lookup()

        ok(typeahead.$menu.is(":visible"), 'typeahead is visible')
        equals(typeahead.$menu.find('li').length, 3, 'has 3 items in menu')
        equals(typeahead.$menu.find('.active').length, 1, 'one item is active')
        ok(typeahead.$menu.find('li').first().hasClass('active'), "first item is active")

        // simulate entire key pressing event
        $input.trigger({
          type: 'keydown'
        , keyCode: 40
        })
        .trigger({
          type: 'keypress'
        , keyCode: 40
        })
        .trigger({
          type: 'keyup'
        , keyCode: 40
        })

        ok(typeahead.$menu.find('li').first().next().hasClass('active'), "second item is active")

        $input.trigger({
          type: 'keydown'
        , keyCode: 38
        })
        .trigger({
          type: 'keypress'
        , keyCode: 38
        })
        .trigger({
          type: 'keyup'
        , keyCode: 38
        })

        ok(typeahead.$menu.find('li').first().hasClass('active'), "first item is active")

        $input.remove()
        typeahead.$menu.remove()
      })


      test("should set input value to selected item", () => {
        var $input = $('<input />').typeahead({
              source: ['aa', 'ab', 'ac']
            }).appendTo('body');

        var typeahead = $input.data('typeahead');
        var changed = false;
        var focus = false;
        var blur = false;

        $input.val('a')
        typeahead.lookup()

        $input.change(() => { changed = true });
        $input.focus(() => { focus = true; blur = false });
        $input.blur(() => { blur = true; focus = false });

        $(typeahead.$menu.find('li')[2]).mouseover().click()

        equals($input.val(), 'ac', 'input value was correctly set')
        ok(!typeahead.$menu.is(':visible'), 'the menu was hidden')
        ok(changed, 'a change event was fired')
        ok(focus && !blur, 'focus is still set')

        $input.remove()
        typeahead.$menu.remove()
      })

      test("should start querying when minLength is met", () => {
        var $input = $('<input />').typeahead({
              source: ['aaaa', 'aaab', 'aaac'],
              minLength: 3
            }).appendTo('body');

        var typeahead = $input.data('typeahead');

        $input.val('aa')
        typeahead.lookup()

        equals(typeahead.$menu.find('li').length, 0, 'has 0 items in menu')

        $input.val('aaa')
        typeahead.lookup()

        equals(typeahead.$menu.find('li').length, 3, 'has 3 items in menu')

        $input.remove()
        typeahead.$menu.remove()
      })
})
