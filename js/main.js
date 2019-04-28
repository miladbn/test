$(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1500,
        smartSpeed: 1600,
        navSpeed:600,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            },
            1300: {
                items: 4,
            }
        },
    });

});
$(document).ready(function () {

    //scroll button
    $("header .header-scrolldown button").mouseover(function () {
        $(this).text("SCROLL DOWN");
        $(this).css({
            "color": "gray",
            "font-size": "11px"
        });
    });
    $("header .header-scrolldown button").mouseleave(function () {
        $(this).html('<i class="fas fa-angle-down"></i>');
    });

    //scroll it down 
    $(function () {
        $.scrollIt();
    });

});


$(function () {


    $.scrollify({
        section: ".scroll",
        //sectionName:false,
        scrollSpeed: 1100,
        after: function (i) {




        }
    });



});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$(document).ready(function () {
    $(".owl-carousel2").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            },
            1300: {
                items: 2,
            }
        },
    });

});

$(document).ready(function () {
    $(".owl-carousel3").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            992: {
                items: 1
            },
            1300: {
                items: 2,
            }
        },
    });

});

$(document).ready(function () {
    $(".owl-carousel4").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            },
            1300: {
                items: 5,
            }
        },
    });

});
