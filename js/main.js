$(document).ready(function () {
    
    window.onload = (event) => {
        $('.wrap-loader').hide();
    };
    
    $(document).on('click', '.navbar-nav>li>a[href^="#"]', function (e) {
        let id = $(this).attr('href');
        let $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        let pos = $id.offset().top;
        
        $('body, html').animate({scrollTop: pos});
    });
    
    
    $('.intro-slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    
    $('.slick-slider-works').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        responsive: [
            {
                breakpoint: 450, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: false
                }
            }
        ]
    });
    
    //
    // $('.list-tab').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     autoplay: false,
    //     dots: false,
    //     arrows: false,
    //     prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    //     nextArrow: '<button class="slide-arrow next-arrow"></button>',
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 autoplay: true,
    //                 autoplaySpeed: 3000,
    //                 dots: false,
    //                 arrows: true,
    //
    //             }
    //         },
    //         {
    //             breakpoint: 810,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 autoplay: false,
    //                 autoplaySpeed: 3000,
    //                 dots: false,
    //                 arrows: false,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 autoplay: false,
    //                 autoplaySpeed: 3000,
    //                 dots: true,
    //                 arrows: false,
    //
    //             }
    //         }
    //     ]
    // });
    
    $("#tabs").tabs();
    
    $("#mobile-tabs").accordion({
        heightStyle: "content"
    });
    
    $('.slick-slider-team').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: false,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    dots: true,
                    
                }
            }
        ]
    });
    
    
    $('.slick-slider-works .slick-arrow').hide();
    $('.intro-slider .slick-arrow').hide();
    
    function number_to(className, from, to, duration) {
        let element = $('.' + className);
        let start = new Date().getTime();
        setTimeout(function () {
            let now = (
                    new Date().getTime()) - start;
            let progress = now / duration;
            let result = Math.floor((
                    to - from) * progress + from);
            element.html(progress < 1 ? result + '+' : to + '+');
            if (progress < 1) setTimeout(arguments.callee, 10);
        }, 10);
    }
    
    number_to('price-num-1', 1, 500, 10000);
    number_to('price-num-2', 1, 300, 10000);
    number_to('price-num-3', 1, 200, 10000);
    number_to('price-num-4', 1, 400, 10000);
    
    
    window.onscroll = function () {
        fixing_navbar()
    };
    
    function fixing_navbar() {
        let header = $(".navbar");
        let windowHeight = window.pageYOffset;
        
        if (windowHeight > 0) {
            header.addClass("navbar-fixed");
        }
        else {
            header.removeClass("navbar-fixed");
        }
    }
    
});




