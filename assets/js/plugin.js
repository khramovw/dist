$(document).ready(function () {
    var owl1 = $('#owl-1');
    var owl2 = $('#owl-2');
    var owl3 = $('#owl-3');
    owl1.owlCarousel({
        items: 3,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            }
        }
    });
    owl2.owlCarousel({
        items: 3,
        loop: true,
        lazyLoad: true,
        autoplay: true,
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
        items: 3,
        loop: true,
        lazyLoad: true,
        autoplay: true,
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
