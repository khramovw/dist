'use strict';

$(document).ready(function () {
    var owl1 = $('#owl-1'),
        owl2 = $('#owl-2'),
        owl3 = $('#owl-3');
    owl1.owlCarousel({
        lazyLoad: true,
        center: true,
        loop: true,
        dots: false,
        margin: 10,
        animateIn: true,
        animateOut: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            }
        }
    });
    owl2.owlCarousel({
        loop: true,
        lazyLoad: true,
        animateIn: true,
        animateOut: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            }
        }
    });
    owl3.owlCarousel({
        loop: true,
        lazyLoad: true,
        animateIn: true,
        animateOut: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            }
        }
    });
});

jQuery(document).ready(function ($) {
    //move nav element position according to window width
    moveNavigation();
    $(window).on('resize', function () {
        !window.requestAnimationFrame ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
    });

    //mobile version - open/close navigation
    $('.cd-nav-trigger').on('click', function (event) {
        event.preventDefault();
        if ($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');

        $('header').toggleClass('nav-is-visible');
        $('.cd-main-nav').toggleClass('nav-is-visible');
        $('.cd-main-content').toggleClass('nav-is-visible');
    });

    //mobile version - go back to main navigation
    $('.go-back').on('click', function (event) {
        event.preventDefault();
        $('.cd-main-nav').removeClass('moves-out');
    });

    //open sub-navigation
    $('.cd-subnav-trigger').on('click', function (event) {
        event.preventDefault();
        $('.cd-main-nav').toggleClass('moves-out');
    });

    // $(window).scroll(function(){
    //     if ($(window).scrollTop()>10){
    //         $('header').toggleClass('sroll');
    //     } else {
    //         $('header').toggleClass('sroll');
    //     }
    // })

    function moveNavigation() {
        var navigation = $('.cd-main-nav-wrapper');
        var screenSize = checkWindowWidth();
        if (screenSize) {
            //desktop screen - insert navigation inside header element
            navigation.detach();
            navigation.insertBefore('.cd-nav-trigger');
        } else {
            //mobile screen - insert navigation after .cd-main-content element
            navigation.detach();
            navigation.insertAfter('.cd-main-content');
        }
    }

    function checkWindowWidth() {
        var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
        return mq == 'mobile' ? false : true;
    }
});

$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            $item.addClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-success').trigger('click');
});
