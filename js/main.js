// sticky-nav

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 200);
});

//carousel

jQuery(document).ready(function ($) {
    $('.promotion-card-list').owlCarousel({
        margin: 30,
        loop: true,
        center: false,
        items: 3,
        autoplay: true,
        dots: false,
        nav: true,
        autoplayTimeout: 7500,
        smartSpeed: 450,
        navText: ["<img src='images/next.svg'>", "<img src='images/prev.svg'>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true
            },
            993: {
                items: 2,
                nav: true
            },
            1170: {
                items: 3,
                nav: true
            }
        }
    });
});

jQuery(document).ready(function ($) {
    $('.event-list').owlCarousel({
        margin: 30,
        loop: true,
        center: false,
        items: 3,
        autoplay: true,
        dots: false,
        nav: true,
        autoplayTimeout: 7500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true
            },
            993: {
                items: 2,
                nav: true
            },
            1170: {
                items: 2.8,
                nav: true
            }
        }
    });
});

//aos
AOS.init();

//gallery

$(document).ready(function () {
    var $grid = $('.gallery-grid').isotope({
        itemSelector: '.gallery-item',
        layoutMode: 'fitRows'
    });
    $('.filter-btn').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });
    $('.filter-btn[data-filter="*"]').addClass('active');
});
