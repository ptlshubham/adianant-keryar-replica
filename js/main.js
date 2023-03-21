/*---------------------------------------------
Template name:  Minzel
Version:        1.0
Author:         techydevs
Author Email:   contact@techydevs.com

[Table of Content]

01: Preloader
02: Search box Trigger
03: side-widget-menu
04: Mobile Menu Open Control
05: Mobile Menu Close Control
06: Back to Top Button and Navbar Scrolling Effects
07: back to top button click control
08: Counter up js
09: Client logo carousel
10: client-testimonial
11: service-content-slider
12: single-case-slider
13: shop-slider
14: magnific-popup
15: Quantity number increment control
16: Quantity number decrement control
17: FAQ
18: portfolio filter
19: portfolio list
10: single-portfolio-item
21: Bootstrap Tooltip
22: Nice Select
----------------------------------------------*/

(function ($) {
    "use strict"; //use of strict

    $(document).on('ready', function () {

        /*==== Preloader =====*/
        $(window).on('load', function(){
            $('.loader-container').delay('500').fadeOut(2000);
        });

        /*==== Search box Trigger =====*/
        $(document).on('click', '.search-button', function () {
            $('.search-option').toggleClass('active');
        });

        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon', function () {
            $(this).closest('.sidenav__item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
            $(this).closest('.sidenav__item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
            return false;
        });

        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.logo-right-button .side-menu-open', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container").removeClass('active');
        });

        /*===== Back to Top Button and Navbar Scrolling Effects ======*/
        $(window).on('scroll', function() {
            //header fixed animation and control
            if($(window).scrollTop() > 100) {
                $('.header-menu-wrapper').addClass('header-fixed');
            }else{
                $('.header-menu-wrapper').removeClass('header-fixed');
            }

            //back to top button control
            if ($(window).scrollTop() > 300) {
                $('#back-to-top').addClass('back-btn-shown');
            } else {
                $('#back-to-top').removeClass('back-btn-shown');
            }

            // skillbar
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                },6000);
            });

        });

        /*===== back to top button click control ======*/
        $(document).on("click", '#back-to-top', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*==== Counter up js =====*/
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });



        /*==== Client logo carousel =====*/
        $('.client-logo').owlCarousel({
            loop: true,
            items: 5,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 767 up
                767 : {
                    items: 3
                },
                768 : {
                    items: 3
                },
                // breakpoint from 1280 up
                1280 : {
                    items: 5
                }
            }
        });

        /*==== client-testimonial =====*/
        $('.client-testimonial').owlCarousel({
            loop: true,
            items: 2,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: false,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 1
                },
                // breakpoint from 768 up
                767 : {
                    items: 2
                }
            }
        });

        /*==== service-content-slider =====*/
        $('.service-content-slider').owlCarousel({
            loop: true,
            items: 2,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 1
                },
                // breakpoint from 767 up
                767 : {
                    items: 2
                },
            }
        });

        /*==== single-case-slider =====*/
        $('.single-case-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true
        });

        /*==== shop-slider =====*/
        $('.shop-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        /*==== magnific-popup =====*/
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        /*==== Quantity number increment control =====*/
        $(document).on('click', '.input-number-increment', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val + 1);

        });

        /*==== Quantity number decrement control =====*/
        $(document).on('click', '.input-number-decrement', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val - 1);
        });


        /*====  FAQ  =====*/
        $(document).on('click', '.faq-heading', function () {
            $(this).closest('.faq-panel').siblings().removeClass('active').find('.faq-content').slideUp(200);
            $(this).closest('.faq-panel').toggleClass('active').find('.faq-content').slideToggle(200);
            return false;
        });

        /*====  Portfolio filter  =====*/
        $(document).on( 'click', '.portfolio-filter li', function() {
            var filterData = $( this ).attr('data-filter');

            // use filterFn if matches value
            $('.portfolio-list').isotope({
                filter: filterData,
            });

            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');
        });

        /*==== single portfolio item =====*/
        $('.single-portfolio-item').hover(function () {
            $('.single-portfolio-item .hover-text h4').removeClass('animated fadeInUp');
            $(this).find('.hover-text h4').addClass('animated fadeInUp');
        });

        /*==== Bootstrap Tooltip =====*/
        $('[data-toggle="tooltip"]').tooltip();

        //
        /*====  Nice Select =====*/
        $('select').niceSelect();

    });
})(jQuery);

