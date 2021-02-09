var bgColor1 = {r:29,g:186,b:197,a:0}//Из какого цвета
var bgColor2 = {r:29,g:186,b:197,a:1}//В какой цвет


window.onload = function(){
	window.dispatchEvent(new Event("scroll"));
}
window.addEventListener("scroll",function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
var scrollHeight = innerHeight;
//    Math.max(
//  document.body.scrollHeight, document.documentElement.scrollHeight,
//  document.body.offsetHeight, document.documentElement.offsetHeight,
//  document.body.clientHeight, document.documentElement.clientHeight
//)-innerHeight;//Получаем высоту видимой части окна
var percent = scrollTop/scrollHeight;
var color = {r:0,g:0,b:0,a:0};

var tmp = Math.abs(bgColor1.r - bgColor2.r)*percent;
color.r =  Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp: bgColor1.r + tmp);

 tmp = Math.abs(bgColor1.g - bgColor2.g)*percent;
color.g =  Math.ceil(bgColor1.g > bgColor2.g ? bgColor1.g - tmp: bgColor1.g + tmp);

tmp = Math.abs(bgColor1.b - bgColor2.b)*percent;
color.b =  Math.ceil(bgColor1.b > bgColor2.b ? bgColor1.b - tmp: bgColor1.b + tmp);

//tmp = Math.abs(bgColor1.a - bgColor2.a)*percent;
    tmp = 3*percent - 0.7;
color.a =  bgColor1.a > bgColor2.a ? bgColor1.a - tmp : bgColor1.a + tmp;
// Смотри вниз ↓
color.a = color.a.toFixed(2)
//console.log(color.a)

document.getElementById("ship_background").style.backgroundColor = `rgba(${color.r},${color.g},${color.b},${color.a})`;
document.getElementById("ship_text").style.opacity = color.a;
document.getElementById("ship-ta").style.opacity = color.a;
//    console.log(innerHeight*(1-percent)+160);
document.getElementById("ship").style.bottom = innerHeight*(1-percent)+160;

});


var func = function(e) {

  setTimeout(function() {
    $('#myContainer').one('mousewheel', func);
  }, 500);

  var sec_1 = $(".section");
  let main__current = $('.main__current');
  if (e.originalEvent.wheelDelta / 120 > 0) {
    if (main__current.is(':first-child')) {
      return;
    }
    main__current.removeClass("main__current").addClass("main__next")
    main__current.prev().addClass("main__current").removeClass("main__next main__previous")

  } else {
    if (main__current.is(':last-child')) {
      return;
    }
    main__current.removeClass("main__current").addClass("main__previous");
    main__current.next().addClass("main__current").removeClass("main__next main__previous")
  }


};

$('#myContainer').one('mousewheel', func);