$(document).ready(function() {
    $('.news-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
//        responsive: [
//            {
//                breakpoint: 480,
//                settings: {
//                    slidesToShow: 1,
//                    slidesToScroll: 1
//                }
//            }
//        ]
    });
    $('.galery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
});