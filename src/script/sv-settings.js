(function() {
  $(function() {
    var arial, blackOnWhite, blueOnBlue, brownOnYellow, bviOn, defaultView, fsL, fsM, fsN, greenOnBrown, imgOff, imgOn, lsL, lsM, lsN, pageLoaded, tnr, whiteOnBlack;
    bviOn = function() {
      var items;
      $.cookie('bad_view', true);
      $('.sv_settings').css('display', 'block');
      $('body').addClass('bvi-on');
      switch ($.cookie('color-scheme')) {
        case 'wb':
          whiteOnBlack();
          break;
        case 'bb':
          blueOnBlue();
          break;
        case 'by':
          brownOnYellow();
          break;
        case 'gb':
          greenOnBrown();
          break;
        default:
          blackOnWhite();
      }
      switch ($.cookie('font-size')) {
        case 'medium':
          fsM();
          break;
        case 'large':
          fsL();
          break;
        default:
          fsN();
      }
      switch ($.cookie('letter-spacing')) {
        case 'medium':
          lsM();
          break;
        case 'large':
          lsL();
          break;
        default:
          lsN();
      }
      switch ($.cookie('font')) {
        case 'tnr':
          tnr();
          break;
        default:
          arial();
      }
      switch ($.cookie('images')) {
        case 'off':
          imgOff();
          break;
        default:
          imgOn();
      }
      $('.collapse-head').attr('tabindex', '0');
      $('span, p').css('background', 'none');
      items = $('.more-news .item');
      if (items.length > 11) {
        items.splice(1, 10);
        return items.css('display', 'none');
      }
    };
    fsN = function() {
      $.cookie('font-size', 'normal');
      $('.wrapper *').css('font-size', '1rem');
      $('.wrapper *').css('line-height', '1.5');
      $('.fs-m, .fs-l').removeClass('focus');
      return $('.fs-n').addClass('focus');
    };
    fsM = function() {
      $.cookie('font-size', 'medium');
      $('.wrapper *').css('font-size', '1.3rem');
      $('.wrapper *').css('line-height', '1.5');
      $('.fs-n, .fs-l').removeClass('focus');
      return $('.fs-m').addClass('focus');
    };
    fsL = function() {
      $.cookie('font-size', 'large');
      $('.wrapper *').css('font-size', '1.6rem');
      $('.wrapper *').css('line-height', '1.5');
      $('.fs-n, .fs-m').removeClass('focus');
      return $('.fs-l').addClass('focus');
    };
    lsN = function() {
      $.cookie('letter-spacing', 'normal');
      $('body').removeClass('ls-m').removeClass('ls-l').addClass('ls-n');
      $('.ls-m, .ls-l').removeClass('focus');
      return $('.ls-n').addClass('focus');
    };
    lsM = function() {
      $.cookie('letter-spacing', 'medium');
      $('body').removeClass('ls-n').removeClass('ls-l').addClass('ls-m');
      $('.ls-n, .ls-l').removeClass('focus');
      return $('.ls-m').addClass('focus');
    };
    lsL = function() {
      $.cookie('letter-spacing', 'large');
      $('body').removeClass('ls-n').removeClass('ls-m').addClass('ls-l');
      $('.ls-n, .ls-m').removeClass('focus');
      return $('.ls-l').addClass('focus');
    };
    blackOnWhite = function() {
      $.cookie('color-scheme', 'bw');
      $('body').removeClass('white-on-black').removeClass('blue-on-blue');
      $('body').removeClass('brown-on-yellow').removeClass('green-on-brown');
      $('body').addClass('black-on-white');
      $('.with_dark_overlay').toggleClass('with_dark_overlay');
      $('.calendar-image').removeClass('calendar-image').addClass('black_calendar');
      $('.cs-wb, .cs-bb, .cs-by, .cs-gb').removeClass('focus');
      return $('.cs-bw').addClass('focus');
    };
    whiteOnBlack = function() {
      $.cookie('color-scheme', 'wb');
      $('body').removeClass('black-on-white').removeClass('blue-on-blue');
      $('body').removeClass('brown-on-yellow').removeClass('green-on-brown');
      $('body').addClass('white-on-black');
      $('.with_dark_overlay').toggleClass('with_dark_overlay');
      $('.cs-bw, .cs-bb, .cs-by, .cs-gb').removeClass('focus');
      return $('.cs-wb').addClass('focus');
    };
    blueOnBlue = function() {
      $.cookie('color-scheme', 'bb');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('brown-on-yellow').removeClass('green-on-brown');
      $('body').addClass('blue-on-blue');
      $('.with_dark_overlay').toggleClass('with_dark_overlay');
      $('.cs-bw, .cs-wb, .cs-by, .cs-gb').removeClass('focus');
      return $('.cs-bb').addClass('focus');
    };
    brownOnYellow = function() {
      $.cookie('color-scheme', 'by');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('blue-on-blue').removeClass('green-on-brown');
      $('body').addClass('brown-on-yellow');
      $('.with_dark_overlay').toggleClass('with_dark_overlay');
      $('.cs-bw, .cs-wb, .cs-bb, .cs-gb').removeClass('focus');
      return $('.cs-by').addClass('focus');
    };
    greenOnBrown = function() {
      $.cookie('color-scheme', 'gb');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('blue-on-blue').removeClass('brown-on-yellow');
      $('body').addClass('green-on-brown');
      $('.with_dark_overlay').toggleClass('with_dark_overlay');
      $('.cs-bw, .cs-wb, .cs-bb, .cs-by').removeClass('focus');
      return $('.cs-gb').addClass('focus');
    };
    arial = function() {
      $.cookie('font', 'arial');
      $('body').removeClass('tnr').addClass('arial');
      $('.tnr').removeClass('focus');
      return $('.arial').addClass('focus');
    };
    tnr = function() {
      $.cookie('font', 'tnr');
      $('body').removeClass('arial').addClass('tnr');
      $('.tnr').addClass('focus');
      return $('.arial').removeClass('focus');
    };
    imgOn = function() {
      $.cookie('images', 'on');
      $('body').removeClass('img-off').addClass('img-on');
      $('.img-on').addClass('focus');
      return $('.img-off').removeClass('focus');
    };
    imgOff = function() {
      $.cookie('images', 'off');
      $('body').removeClass('img-on').addClass('img-off');
      $('.img-off').addClass('focus');
      return $('.img-on').removeClass('focus');
    };
    defaultView = function() {
      $('.img-1').toggleClass('with_dark_overlay');
      $('.black_calendar').removeClass('black_calendar').addClass('calendar-image');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('blue-on-blue').removeClass('brown-on-yellow').removeClass('green-on-brown');
      $('.wrapper *').css('font-size', '');
      $('.wrapper *').css('line-height', '');
      $('body').removeClass('ls-n').removeClass('ls-m').removeClass('ls-l');
      $('body').removeClass('arial').removeClass('tnr');
      return $('body').removeClass('img-on').removeClass('img-off');
    };
    if (window.bad_view_flag) {
      $.cookie('bad_view', true);
    }
    if ($.cookie('bad_view') === 'true') {
      $('body, section, div, a, p, ul, span, h1, h2, h3, h4, table, input').addClass('bad_view');
      bviOn();
    }
    pageLoaded = function() {
      var func;
      if ($.cookie('bad_view') === 'true') {
        $('body, section, div, a, p, ul, span, h1, h2, h3, h4, table, input').addClass('bad_view');
        bviOn();
      }
      func = function(e) {
        e.preventDefault();
        $('body, section, div, a, p, ul, span, h1, h2, h3, h4, table, input').toggleClass('bad_view');
        if ($.cookie('bad_view') === 'true') {
          $.cookie('bad_view', false);
          $('.sv_settings').css('display', 'none');
          $('body').removeClass('bvi-on');
          defaultView();
          $('.collapse-head').removeAttr('tabindex');
          return $('.more-news .item').css('display', 'inline-block');
        } else {
          return bviOn();
        }
      };
      $('#fs-n').click(function() {
        return fsN();
      });
      $('#fs-m').click(function() {
        return fsM();
      });
      $('#fs-l').click(function() {
        return fsL();
      });
      $('#ls-n').click(function() {
        return lsN();
      });
      $('#ls-m').click(function() {
        return lsM();
      });
      $('#ls-l').click(function() {
        return lsL();
      });
      $('#cs-bw').click(function() {
        return blackOnWhite();
      });
      $('#cs-wb').click(function() {
        return whiteOnBlack();
      });
      $('#cs-bb').click(function() {
        return blueOnBlue();
      });
      $('#cs-by').click(function() {
        return brownOnYellow();
      });
      $('#cs-gb').click(function() {
        return greenOnBrown();
      });
      $('#arial').click(function() {
        return arial();
      });
      $('#tnr').click(function() {
        return tnr();
      });
      $('#img-on').click(function() {
        return imgOn();
      });
      $('#img-off').click(function() {
        return imgOff();
      });
      $('#bad_view').on('click', func);
      return $('#bad_view_top').on('click', func);
    };
    $(document).on('page:load', pageLoaded);
    return $(document).on('ready', pageLoaded);
  });

}).call(this);