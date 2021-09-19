$(function ($) {

    //banner slider--------------------
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left slick_left" ></i>',
        nextArrow: '<i class="fa fa-angle-right  slick_right "></i>',

    });

    //about slider--------------------
    $('.about_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        arrows: false,

    });

    $('.about_sliderss').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        arrows: false,

    });

    //about slider--------------------
    $('.slider_course').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        prevArrow: '<i class="fa fa-angle-left course_left"></i>',
        nextArrow: '<i class="fa fa-angle-right course_right"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

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
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }

  ]


    });

    //test slider--------------------
    $('.test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left test_le"></i>',
        nextArrow: '<i class="fa fa-angle-right test_ri"></i>',
        asNavFor: '.test_content_slider',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]


    });


    //test_content slider--------------------
    $('.test_content_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        prevArrow: '<i class="fa fa-angle-left test_le"></i>',
        nextArrow: '<i class="fa fa-angle-right test_ri"></i>',
        asNavFor: '.test_slider',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
    }

  ]


    });
    //teacher slider--------------------
    $('.teacher_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        prevArrow: '<i class="fa fa-angle-left course_left"></i>',
        nextArrow: '<i class="fa fa-angle-right course_right"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }

  ]


    });



    //-------counter js 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //menuTop
    var menuTop = $('.custom_nav').offset().top;

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();


        if (scroll > menuTop) {
            $('.custom_nav').addClass('custom_nav_new');
        } else {
            $('.custom_nav').removeClass('custom_nav_new');
        }

        if (scroll > 300) {
            $('.toptobottom').fadeIn(500);
        } else {
            $('.toptobottom').fadeOut(500);
        }

    });


    //test menu
    $('.card-header').on('click', function () {
        $('.card-header').removeClass('activee');
        $(this).addClass('activee');

    });


    //test menu

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-angle-right").removeClass("fa-angle-right").addClass("fa-angle-down");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
    });


    //calender js

    $("#calendar").MEC({

        events: sampleEvents

    });

    $("#calendar").MEC({

        events: sampleEvents,

        from_monday: true

    });




    var sampleEvents = [

        {

            title: "Soulful sundays bay area",

            date: new Date().setDate(new Date().getDate() - 7), // last week

            link: "#"

    },

        {

            title: "London Comicon",

            date: new Date().getTime(), // today

            link: "#"

    },

        {

            title: "Youth Athletic Camp",

            date: new Date().setDate(new Date().getDate() + 31), // next month

            link: "#"

    }

];

    // top tp bottom
    $('.topToBottom').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });

    });


    //menuTop
    var menuTop = $('.custom_nav').offset().top;

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();


        if (scroll > menuTop) {
            $('.custom_nav').addClass('custom_nav_new');
        } else {
            $('.custom_nav').removeClass('custom_nav_new');
        }

        if (scroll > 300) {
            $('.topToBottom').fadeIn(500);
        } else {
            $('.topToBottom').fadeOut(500);
        }

    });


    $(document).ready(function () {

        $("#mynav ul li a").on('click', function (event) {

            if (this.hash !== "") {

                event.preventDefault();


                var hash = this.hash;


                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    window.location.hash = hash;
                });
            }
        });
    });









});
