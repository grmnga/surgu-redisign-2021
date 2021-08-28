"use strict";

(function () {
  $(function () {
    var arial, blackOnWhite, blueOnBlue, brownOnYellow, bviOn, defaultView, fsL, fsM, fsN, greenOnBrown, imgOff, imgOn, lsL, lsM, lsN, pageLoaded, tnr, whiteOnBlack;

    bviOn = function bviOn() {
      // var items;
      $.cookie('bad_view', true); // $('.sv_settings').css('display', 'block');

      $('video, .play-button-wrapper').css('display', 'none');
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

        case 'original':
          originalColor();
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

        case 'on':
          imgOn();
          break;

        default:
          imgBlackAndWhite();
      } // $('.collapse-head').attr('tabindex', '0');
      // $('span, p').css('background', 'none');
      // items = $('.more-news .item');
      // if (items.length > 11) {
      //   items.splice(1, 10);
      //   return items.css('display', 'none');
      // }

    };

    fsN = function fsN() {
      $.cookie('font-size', 'normal'); // $('.wrapper *').css('font-size', '1rem');
      // $('.wrapper *').css('line-height', '1.5');

      $('body').removeClass('fs-m').removeClass('fs-l').addClass('fs-n');
      $('.fs-m, .fs-l').removeClass('focus');
      $('.fs-n').addClass('focus');
    };

    fsM = function fsM() {
      $.cookie('font-size', 'medium'); // $('.wrapper *').css('font-size', '1.3rem');
      // $('.wrapper *').css('line-height', '1.5');

      $('body').removeClass('fs-n').removeClass('fs-l').addClass('fs-m');
      $('.fs-n, .fs-l').removeClass('focus');
      $('.fs-m').addClass('focus');
    };

    fsL = function fsL() {
      $.cookie('font-size', 'large'); // $('.wrapper *').css('font-size', '1.6rem');
      // $('.wrapper *').css('line-height', '1.5');

      $('body').removeClass('fs-n').removeClass('fs-m').addClass('fs-l');
      $('.fs-n, .fs-m').removeClass('focus');
      $('.fs-l').addClass('focus');
    };

    lsN = function lsN() {
      $.cookie('letter-spacing', 'normal');
      $('body').removeClass('ls-m').removeClass('ls-l').addClass('ls-n');
      $('.ls-m, .ls-l').removeClass('focus');
      $('.ls-n').addClass('focus');
    };

    lsM = function lsM() {
      $.cookie('letter-spacing', 'medium');
      $('body').removeClass('ls-n').removeClass('ls-l').addClass('ls-m');
      $('.ls-n, .ls-l').removeClass('focus');
      $('.ls-m').addClass('focus');
    };

    lsL = function lsL() {
      $.cookie('letter-spacing', 'large');
      $('body').removeClass('ls-n').removeClass('ls-m').addClass('ls-l');
      $('.ls-n, .ls-m').removeClass('focus');
      $('.ls-l').addClass('focus');
    };

    blackOnWhite = function blackOnWhite() {
      $.cookie('color-scheme', 'bw');
      $('body').removeClass('white-on-black').removeClass('blue-on-blue');
      $('body').removeClass('brown-on-yellow').removeClass('green-on-brown');
      $('body').addClass('black-on-white'); // $('.with_dark_overlay').toggleClass('with_dark_overlay');
      // $('.calendar-image').removeClass('calendar-image').addClass('black_calendar');

      $('.cs-wb, .cs-bb, .cs-by, .cs-gb, .cs-original').removeClass('focus');
      $('.cs-bw').addClass('focus');
    };

    whiteOnBlack = function whiteOnBlack() {
      $.cookie('color-scheme', 'wb');
      $('body').removeClass('black-on-white').removeClass('blue-on-blue');
      $('body').removeClass('brown-on-yellow').removeClass('green-on-brown');
      $('body').addClass('white-on-black'); // $('.with_dark_overlay').toggleClass('with_dark_overlay');

      $('.cs-bw, .cs-bb, .cs-by, .cs-gb, .cs-original').removeClass('focus');
      $('.cs-wb').addClass('focus');
    };

    blueOnBlue = function blueOnBlue() {
      $.cookie('color-scheme', 'bb');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('brown-on-yellow').removeClass('green-on-brown');
      $('body').addClass('blue-on-blue'); // $('.with_dark_overlay').toggleClass('with_dark_overlay');

      $('.cs-bw, .cs-wb, .cs-by, .cs-gb, .cs-original').removeClass('focus');
      $('.cs-bb').addClass('focus');
    };

    brownOnYellow = function brownOnYellow() {
      $.cookie('color-scheme', 'by');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('blue-on-blue').removeClass('green-on-brown');
      $('body').addClass('brown-on-yellow'); // $('.with_dark_overlay').toggleClass('with_dark_overlay');

      $('.cs-bw, .cs-wb, .cs-bb, .cs-gb, .cs-original').removeClass('focus');
      $('.cs-by').addClass('focus');
    };

    greenOnBrown = function greenOnBrown() {
      $.cookie('color-scheme', 'gb');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('blue-on-blue').removeClass('brown-on-yellow');
      $('body').addClass('green-on-brown'); // $('.with_dark_overlay').toggleClass('with_dark_overlay');

      $('.cs-bw, .cs-wb, .cs-bb, .cs-by, .cs-original').removeClass('focus');
      $('.cs-gb').addClass('focus');
    };

    originalColor = function originalColor() {
      $.cookie('color-scheme', 'original');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('blue-on-blue').removeClass('brown-on-yellow');
      $('body').removeClass('green-on-brown');
      $('.cs-bw, .cs-wb, .cs-bb, .cs-by, .cs-gb').removeClass('focus');
      $('.cs-original').addClass('focus');
    };

    arial = function arial() {
      $.cookie('font', 'arial');
      $('body').removeClass('tnr').addClass('arial');
      $('.tnr').removeClass('focus');
      $('.arial').addClass('focus');
    };

    tnr = function tnr() {
      $.cookie('font', 'tnr');
      $('body').removeClass('arial').addClass('tnr');
      $('.tnr').addClass('focus');
      $('.arial').removeClass('focus');
    };

    imgOn = function imgOn() {
      $.cookie('images', 'on');
      $('body').removeClass('img-off').removeClass('img-black-and-white').addClass('img-on');
      $('#img-on').addClass('focus');
      $('#img-off, #img-black-and-white').removeClass('focus');
    };

    imgOff = function imgOff() {
      $.cookie('images', 'off');
      $('body').removeClass('img-on').removeClass('img-black-and-white').addClass('img-off');
      $('#img-off').addClass('focus');
      $('#img-on, #img-black-and-white').removeClass('focus');
    };

    imgBlackAndWhite = function imgBlackAndWhite() {
      $.cookie('images', 'black-and-white');
      $('body').removeClass('img-on').removeClass('img-off').addClass('img-black-and-white');
      $('#img-black-and-white').addClass('focus');
      $('#img-on, #img-off').removeClass('focus');
    };

    defaultView = function defaultView() {
      // $('.img-1').toggleClass('with_dark_overlay');
      // $('.black_calendar').removeClass('black_calendar').addClass('calendar-image');
      $('body').removeClass('black-on-white').removeClass('white-on-black');
      $('body').removeClass('blue-on-blue').removeClass('brown-on-yellow').removeClass('green-on-brown'); // $('.wrapper *').css('font-size', '');
      // $('.wrapper *').css('line-height', '');

      $('body').removeClass('ls-n').removeClass('ls-m').removeClass('ls-l');
      $('body').removeClass('arial').removeClass('tnr');
      $('body').removeClass('img-on').removeClass('img-off');
    };

    if (window.bad_view_flag) {
      $.cookie('bad_view', true);
    }

    if ($.cookie('bad_view') === 'true') {
      // $('body, section, div, a, p, ul, span, h1, h2, h3, h4, table, input').addClass('bad_view');
      bviOn();
    }

    pageLoaded = function pageLoaded() {
      var func;

      if ($.cookie('bad_view') === 'true') {
        // $('body, section, div, a, p, ul, span, h1, h2, h3, h4, table, input').addClass('bad_view');
        bviOn();
      }

      func = function func(e) {
        e.preventDefault(); // $('body').toggleClass('bad_view');
        // $('body, section, div, a, p, ul, span, h1, h2, h3, h4, table, input').toggleClass('bad_view');

        if ($.cookie('bad_view') === 'true') {
          $.cookie('bad_view', false); // $('.sv_settings').css('display', 'none');

          $('body').removeClass('bvi-on');
          defaultView(); // $('.collapse-head').removeAttr('tabindex');
          // $('.more-news .item').css('display', 'inline-block');
        } else {
          return bviOn();
        }
      };

      $('#fs-n').on('click', fsN);
      $('#fs-m').on('click', fsM);
      $('#fs-l').on('click', fsL);
      $('#ls-n').on('click', lsN);
      $('#ls-m').on('click', lsM);
      $('#ls-l').on('click', lsL);
      $('#cs-bw').on('click', blackOnWhite);
      $('#cs-wb').on('click', whiteOnBlack);
      $('#cs-bb').on('click', blueOnBlue);
      $('#cs-by').on('click', brownOnYellow);
      $('#cs-gb').on('click', greenOnBrown);
      $('#cs-original').on('click', originalColor);
      $('#arial').on('click', arial);
      $('#tnr').on('click', tnr);
      $('#img-on').on('click', imgOn);
      $('#img-off').on('click', imgOff);
      $('#img-black-and-white').on('click', imgBlackAndWhite);
      $('.sv_settings .icon-close').on('click', func);
      $('.icon-bvi').on('click', func);
    };

    $(document).on('page:load', pageLoaded);
    return $(document).on('ready', pageLoaded);
  });
}).call(void 0);