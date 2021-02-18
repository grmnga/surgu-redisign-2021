var bgColor1 = {r:29,g:186,b:197,a:0}//Из какого цвета
var bgColor2 = {r:29,g:186,b:197,a:1}//В какой цвет



window.onload = function(){
	window.dispatchEvent(new Event("scroll"));
}
window.addEventListener("scroll",function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
var scrollHeight = innerHeight;
var percent = scrollTop/scrollHeight;
var color = {r:0,g:0,b:0,a:0};

//tmp = Math.abs(bgColor1.a - bgColor2.a)*percent;
tmp = 3*percent - 0.5;
color.a =  bgColor1.a > bgColor2.a ? bgColor1.a - tmp : bgColor1.a + tmp;
color.a = color.a.toFixed(2)
if (color.a > 0.99 || color.a < -0.5) {
    return;
}
    
document.getElementById("ship_color_background").style.opacity = color.a;
document.getElementById("ship_text_background").style.opacity = color.a;
document.getElementById("ship_bar").style.opacity = color.a;
    console.log(innerHeight*(1-percent)+160);
document.getElementById("ship").style.bottom = innerHeight*(1-percent)+160;

});


