$(document).ready(function () {
    var owl1 = $('#owl-1'),
        owl2 = $('#owl-2'),
        owl3 = $('#owl-3');
    owl1.owlCarousel({
        lazyLoad: true,
        center:true,
        loop: true,
        dots: false,
        margin:10,
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
