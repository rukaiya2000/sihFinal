/*
-------------------------------------------------------------------------------------------
* Template Name    : Bootstrap 4 HTML5 Multi Purpose One/Multi Pages Template             *
* Author           : Setblue                                                              *
* Version          : 1.0.0                                                                *
* File Description : Main Css file of the template                                        *
*------------------------------------------------------------------------------------------
*/

$(document).ready(function () {
    "use strict";
    //===== Prealoder
    $(function () {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    });

    /*----DROPDOWN HOVER JS-----*/
    (function ($) {
        $(".dropdown").on('mouseover', function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).addClass('open');
        });
        $(".dropdown").on('mouseleave', function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).removeClass('open');
        });
    })(jQuery);

    //===== jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 60)
                    }, 1200);
                    return false;
                }
            }
        });

    });

    //===== Sticky
    $(window).on('scroll', function (event) {
        $(function () {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "images/logo.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "images/logo-2.svg");
        }
        });

        //===== Section Menu Active
        $(function () {
            var scrollLink = $('.page-scroll');
            var scrollbarLocation = $(this).scrollTop();
            scrollLink.each(function () {
                var sectionOffset = $(this.hash).offset().top - 73;
                if (sectionOffset <= scrollbarLocation) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            });
        });

        //===== Show or hide the sticky footer button
        $(function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
        });
    });



    //===== close navbar-collapse when a  clicked
    $(".one-page .navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".one-page .navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== testimonial active
    $('.testimonial-active').slick({
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    //===== Back to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //=====  WOW active
    new WOW().init();

    //=====  particles
    (function ($) {
        var viewPortWidth = jQuery(window).width();
        if (viewPortWidth > 991) {
            "use strict";
            particlesJS.load('particles-1', 'particles.json', function () { });
            particlesJS.load('particles-2', 'particles.json', function () { });
        }
    })(jQuery);



    /*----ISOTOP JS-----*/
    var PortfolioItems = $('.portfolio-items');
    if (PortfolioItems.length > 0) {
        var $container = $('.portfolio-items');
        var $filter = $('#portfolio-filter');
        $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });
        $filter.find('a').on("click", function () {
            var selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('active');
            $(this).addClass('active');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    animationDuration: 750,
                    easing: 'linear',
                    queue: false,
                    touchSensitivity: 2,
                }
            });
            return false;
        });
    }

    /*----MAGNIFIC POPUP JS-----*/
    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function () {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }
});
function myFunctionn() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }