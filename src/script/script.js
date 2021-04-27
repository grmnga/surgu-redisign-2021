var bgColor1 = {r:29,g:186,b:197,a:0}//Из какого цвета
var bgColor2 = {r:29,g:186,b:197,a:1}//В какой цвет



window.onload = function () {
    window.dispatchEvent(new Event("scroll"));
    $('.sub button').on('click', dropdownMenu);
    $('.menu').on('click', mainMenuButtonClick);
    $('.category').on('click', categoryMenuButtonClick);
    $('.category-menu .categories button').on('click', categoryButtonClick);
    $('.menu-dark-background').on('click', closeMenu);
    $('#play-button').on('click', playButtonClick);
    $('.category-menu .categories button').on('click', categoryButtonClickForMobile)

    var tick = false;
    var scroll_direction = 'down';
//    $(window).bind('mousewheel', _.throttle(function(event) {
//        if (tick != true) {
//            tick = true;
//            var top = $('.ecosystem').offset().top;
//            let current_bottom = window.pageYOffset + document.documentElement.clientHeight;
//            let current_top = window.pageYOffset;
//            if (top + 400 > current_bottom &&
//                top > current_top &&
//                event.originalEvent.wheelDelta < 0) {
//                $("html, body").stop().animate({
//                    scrollTop: top
//                }, 500);
////              shipBackgroundOpacity();
//                $("#ship_color_background, #ship_text_background").stop().animate({
//                    opacity: 1
//                }, 1000);
//                $("#ship_bar").stop().animate({
//                    opacity: 0.99
//                }, 1000);
//            } 
//            else if (top >= current_top &&
//                     top < current_bottom &&
//                    event.originalEvent.wheelDelta > 0) {
//                $("html, body").stop().animate({
//                    scrollTop: 0
//                }, 500);  
//                $("#ship_color_background, #ship_text_background").stop().animate({
//                    opacity: 0
//                }, 700);
//                $("#ship_bar").stop().animate({
//                    opacity: 0
//                }, 700);
//            }
//              setTimeout(function() {
//                tick = false;
//              }, 700);
//        }
//        
//    }, 100));
    var lastScrollTop = 0;
    $(window).scroll(_.throttle(function () {
        if (tick != true) {
            tick = true;
            var top = $('.ecosystem').offset().top;
            let current_bottom = window.pageYOffset + document.documentElement.clientHeight;
            let current_top = window.pageYOffset;
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                // downscroll code
                if (top + 400 > current_bottom &&
                    top > current_top) {
                    $("html, body").stop().animate({
                        scrollTop: top
                    }, 500);
                    //              shipBackgroundOpacity();
                    $("#ship_color_background, #ship_text_background").stop().animate({
                        opacity: 1
                    }, 1000);
                    $("#ship_bar").stop().animate({
                        opacity: 0.99
                    }, 1000);
                }

            } else {
                // upscroll code
                if (top >= current_top &&
                    top < current_bottom) {
                    $("html, body").stop().animate({
                        scrollTop: 0
                    }, 500);
                    $("#ship_color_background, #ship_text_background").stop().animate({
                        opacity: 0
                    }, 700);
                    $("#ship_bar").stop().animate({
                        opacity: 0
                    }, 700);
                }
            }
            lastScrollTop = $(this).scrollTop();
            setTimeout(function () {
                tick = false;
            }, 500);
        }
    }, 700));
}

function shipBackgroundOpacity() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
    var scrollHeight = innerHeight;
    var percent = scrollTop/scrollHeight;
    var color = {r:0,g:0,b:0,a:0};

    //tmp = Math.abs(bgColor1.a - bgColor2.a)*percent;
    tmp = 3*percent - 1;
    color.a =  bgColor1.a > bgColor2.a ? bgColor1.a - tmp : bgColor1.a + tmp;
    color.a = color.a.toFixed(2);
    color.b = color.a;
    if (color.a > 0.99) {
        color.a = 1;
    }
    document.getElementById("ship_color_background").style.opacity = color.a;
    document.getElementById("ship_text_background").style.opacity = color.a;
    if (color.b > 0.99 || color.a < -0.5) {
        return;
    }
    document.getElementById("ship_bar").style.opacity = color.a;
}

function dropdownMenu() {
    $(this).next('ul').slideToggle();
    $(this).find('i').toggleClass('icon-plus').toggleClass('icon-close');
}

// гамбургер
function mainMenuButtonClick() {
    // Если меню скрыто - открыть и показать основное меню
    if ($('.menu-block').hasClass('hide')) {
        showMenuBlock();
        showMainMenu();
    } 
    // Если основное меню показывается - скрыть его и закрыть блок
    else if ($('.menu-block').hasClass('main-menu-show')) {
        closeMenu();
    } 
    // Если показывается меню по категориям - скрыть его и показать основное
    else {
        hideCategoryMenu();
        showMainMenu();
    }
}

// меню по целевым аудиториям
function categoryMenuButtonClick() {    
    // Если меню скрыто - открыть и показать меню по категориям
    if ($('.menu-block').hasClass('hide')) {
        setCategoryMenuHeight();
        showMenuBlock();
        showCategoryMenu();
    } 
    // Если меню по категориям показывается - скрыть его и закрыть блок
    else if ($('.menu-block').hasClass('category-menu-show')) {
        closeMenu();
    } 
    // Если показывается основное меню - скрыть его и показать по категориям
    else {
        setCategoryMenuHeight();
        hideMainMenu();
        showCategoryMenu();
    }
}

// клик по затемненной области при открытом меню
function closeMenu() {
    hideMainMenu();
    hideCategoryMenu();
    hideMenuBlock();
}

// управление вкладками меню по ЦА
function categoryButtonClick() {
    let control_id = this.getAttribute('aria-controls');
    $('.category-content').removeClass('active');
    $('#' + control_id).addClass('active');
    $('.category-menu .categories button').removeClass('active');
    $(this).addClass('active');
    setCategoryMenuHeight();
}

function setCategoryMenuHeight() {
    $('.menu-wrapper').height($('.category-menu').height());
}

// кнопка управления видео фоном
function playButtonClick() {
    $(this).find('i').toggleClass('icon-pause-outline, icon-play-outline');
    let video = $('#video')[0];
    video.paused ? video.play() : video.pause();
}

function showMenuBlock() {
    $('.menu-block').removeClass('hide');
    $('html').addClass('overflow-hidden');
}

function hideMenuBlock() {
    $('.menu-block').addClass('hide');
    $('html').removeClass('overflow-hidden');
}

function showMainMenu() {
    $('.menu-block').addClass('main-menu-show');
    $('.menu-buttons button.menu i').removeClass('icon-menu').addClass('icon-close');
    $('.menu-buttons').addClass('main-menu-active');
    $('.menu-wrapper').height('auto'); 
}

function hideMainMenu() {
    $('.menu-block').removeClass('main-menu-show');
    $('.menu-buttons button.menu i').removeClass('icon-close').addClass('icon-menu');
    $('.menu-buttons').removeClass('main-menu-active');
}

function showCategoryMenu() {    
    $('.menu-block').addClass('category-menu-show');
    $('.menu-buttons button.category i').removeClass('icon-info').addClass('icon-close');
    $('.menu-buttons').addClass('category-menu-active');
    setCategoryMenuHeight();
}

function hideCategoryMenu() {
    $('.menu-block').removeClass('category-menu-show');
    $('.menu-buttons button.category i').removeClass('icon-close').addClass('icon-info');
    $('.menu-buttons').removeClass('category-menu-active');
}

// выпадающий список категорий в мобильном меню
function categoryButtonClickForMobile() {
    $('.category-menu .categories button').toggleClass('show');  
}