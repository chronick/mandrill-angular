// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!($ => {

  $(() => {
    var $window = $(window)

    // Disable certain links in docs
    $('section [href^=#]').click(e => {
      e.preventDefault()
    })

    // side bar
    setTimeout(() => {
      $('.bs-docs-sidenav').affix({
        offset: {
          top() { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        }
      })
    }, 100)

    // make code pretty
    window.prettyPrint && prettyPrint()

    // add-ons
    $('.add-on :checkbox').on('click', function () {
      var $this = $(this);
      var method = $this.attr('checked') ? 'addClass' : 'removeClass';
      $(this).parents('.add-on')[method]('active')
    })

    // add tipsies to grid for scaffolding
    if ($('#gridSystem').length) {
      $('#gridSystem').tooltip({
          selector: '.show-grid > [class*="span"]'
        , title() { return $(this).width() + 'px' }
      })
    }

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[data-toggle=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // popover demo
    $("a[data-toggle=popover]")
      .popover()
      .click(e => {
        e.preventDefault()
      })

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(() => {
          btn.button('reset')
        }, 3000)
      })

    // carousel demo
    $('#myCarousel').carousel()

    // javascript build logic
    var inputsComponent = $("#components.download input");

    var inputsPlugin = $("#plugins.download input");
    var inputsVariables = $("#variables.download input");

    // toggle all plugin checkboxes
    $('#components.download .toggle-all').on('click', e => {
      e.preventDefault()
      inputsComponent.attr('checked', !inputsComponent.is(':checked'))
    })

    $('#plugins.download .toggle-all').on('click', e => {
      e.preventDefault()
      inputsPlugin.attr('checked', !inputsPlugin.is(':checked'))
    })

    $('#variables.download .toggle-all').on('click', e => {
      e.preventDefault()
      inputsVariables.val('')
    })

    // request built javascript
    $('.download-btn .btn').on('click', () => {
      var css = $("#components.download input:checked")
            .map(function () { return this.value })
            .toArray();

      var js = $("#plugins.download input:checked")
            .map(function () { return this.value })
            .toArray();

      var vars = {};
      var img = ['glyphicons-halflings.png', 'glyphicons-halflings-white.png'];

      $("#variables.download input")
        .each(function () {
          $(this).val() && (vars[ $(this).prev().text() ] = $(this).val())
        })

      $.ajax({
        type: 'POST'
      , url: /\?dev/.test(window.location) ? 'http://localhost:3000' : 'http://bootstrap.herokuapp.com'
      , dataType: 'jsonpi'
      , params: {
          js
        , css
        , vars
        , img
      }
      })
    })
  })

// Modified from the original jsonpi https://github.com/benvinegar/jquery-jsonpi
$.ajaxTransport('jsonpi', (opts, originalOptions, jqXHR) => {
  var url = opts.url;

  return {
    send(_, completeCallback) {
      var name = 'jQuery_iframe_' + jQuery.now();
      var iframe;
      var form;

      iframe = $('<iframe>')
        .attr('name', name)
        .appendTo('head')

      form = $('<form>')
        .attr('method', opts.type) // GET or POST
        .attr('action', url)
        .attr('target', name)

      $.each(opts.params, (k, v) => {

        $('<input>')
          .attr('type', 'hidden')
          .attr('name', k)
          .attr('value', typeof v == 'string' ? v : JSON.stringify(v))
          .appendTo(form)
      })

      form.appendTo('body').submit()
    }
  };
})

})(window.jQuery)
