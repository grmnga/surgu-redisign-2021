$(document).ready(function() {
    $('.news-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
//    $('.partners-items').slick({
//        infinite: true,
//        dots: true,
//        slidesToShow: 2,
//        slidesToScroll: 2,
//        responsive: [
//            {
//                breakpoint: 1024,
//                settings: {
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    infinite: true,
//                    dots: true
//                }
//            },
//            {
//                breakpoint: 768,
//                settings: {
//                    slidesToShow: 1,
//                    slidesToScroll: 1
//                }
//            }
//        ]
//    });
});