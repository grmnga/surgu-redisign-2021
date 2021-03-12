var bgColor1 = {r:29,g:186,b:197,a:0}//Из какого цвета
var bgColor2 = {r:29,g:186,b:197,a:1}//В какой цвет



window.onload = function(){
	window.dispatchEvent(new Event("scroll"));
    initMenu();
    $('.sub button').on('click', dropdownMenu);
    $('.menu').on('click', mainMenuButtonClick);
    $('.category').on('click', categoryMenuButtonClick);
    $('.category-menu .categories button').on('click', categoryButtonClick)
}
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
    var scrollHeight = innerHeight;
    var percent = scrollTop/scrollHeight;
    var color = {r:0,g:0,b:0,a:0};

    //tmp = Math.abs(bgColor1.a - bgColor2.a)*percent;
    tmp = 3*percent - 0.9;
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
    //    console.log(innerHeight*(1-percent)+160);
    //document.getElementById("ship").style.bottom = innerHeight*(1-percent)+160;

});

function initMenu() {
//    $('.menu-buttons button').on('click', function() {
//        $('html').toggleClass('overflow-hidden');
//        $('.menu-block').toggleClass('hide');
//        $('.menu-dark-background').toggleClass('hide');
//        $('nav.dropdown-links .sub').toggleClass('show');
//    });
}

function dropdownMenu() {
    $(this).next('ul').slideToggle();
}

function mainMenuButtonClick() {
//    if ($('.menu-block').hasClass('hide')) {
//        $('.menu-block').removeClass('hide');
//        $('.main-menu').addClass('active');
//        $('nav.dropdown-links .sub').addClass('show');
//    } else if ($('.main-menu').hasClass('active')) {
//        $('.main-menu').removeClass('active');
//        $('.menu-block').addClass('hide');
//        $('nav.dropdown-links .sub').removeClass('show');
//    } else {
//        $('.main-menu').addClass('active');
//        $('.category-menu').removeClass('active');
//        $('nav.dropdown-links .sub').addClass('show');
//    }
    // Если меню скрыто - открыть и показать основное меню
    if ($('.menu-block').hasClass('hide')) {
        $('.menu-block').removeClass('hide').addClass('main-menu-show');
        $('html').addClass('overflow-hidden');
    } 
    // Если основное меню показывается - скрыть его и закрыть блок
    else if ($('.menu-block').hasClass('main-menu-show')) {
        $('.menu-block').addClass('hide').removeClass('main-menu-show');
        $('html').removeClass('overflow-hidden');
    } 
    // Если показывается меню по категориям - скрыть его и показать основное
    else {
        $('.menu-block').removeClass('category-menu-show').addClass('main-menu-show');
    }
}

function categoryMenuButtonClick() {
//    if ($('.menu-block').hasClass('hide')) {
//        $('html').addClass('overflow-hidden');
//        $('.menu-block').removeClass('hide');
//        $('.category-menu').addClass('active');
//        $('nav.dropdown-links .sub').removeClass('show');
//    } else if ($('.category-menu').hasClass('active')) {
//        $('.category-menu').removeClass('active');
//        $('.menu-block').addClass('hide');
//        $('nav.dropdown-links .sub').addClass('show');
//    } else {
//        $('.category-menu').addClass('active');
//        $('.main-menu').removeClass('active');
//        $('nav.dropdown-links .sub').removeClass('show');
//    }
    
    // Если меню скрыто - открыть и показать меню по категориям
    if ($('.menu-block').hasClass('hide')) {
        $('.menu-block').removeClass('hide').addClass('category-menu-show');
        $('html').addClass('overflow-hidden');
    } 
    // Если меню по категориям показывается - скрыть его и закрыть блок
    else if ($('.menu-block').hasClass('category-menu-show')) {
        $('.menu-block').addClass('hide').removeClass('category-menu-show');
        $('html').removeClass('overflow-hidden');
    } 
    // Если показывается основное меню - скрыть его и показать по категориям
    else {
        $('.menu-block').removeClass('main-menu-show').addClass('category-menu-show');
    }
}

function categoryButtonClick() {
    let control_id = this.getAttribute('aria-controls');
    $('.category-content').removeClass('active');
    $('#' + control_id).addClass('active');
    $('.category-menu .categories button').removeClass('active');
    $(this).addClass('active');
}
