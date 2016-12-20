$(function() {
    var $carousel = $('.jcarousel__wrap'),
        $reasons = $('#reasons-accordion'),
        $bgCarousel = $('.bg-carousel');

    function bgcChangeSlide ($carousel) {
        var $active = $carousel.find('.m-active'),
            $next = $active.next();

        if (!$next.length) {
            $next = $carousel.children(':first');
        }

        $next.addClass('m-active');
        $active.removeClass('m-active');

        setTimeout(bgcChangeSlide.bind(null, $carousel), 4000);
    }

    if ($carousel.length) {
        $carousel.jcarousel({
            list: '.jcarousel__list',
            wrap: 'both'
        });

        $('.jcarousel__nav.m-prev').click(function() {
            $carousel.jcarousel('scroll', '-=1');
        });

        $('.jcarousel__nav.m-next').click(function() {
            $carousel.jcarousel('scroll', '+=1');
        });
    }

    if ($reasons.length) {

        $reasons.find('.panel-heading').each(function () {
            $(this).parent().find('.panel-collapse').collapse({
                parent: $reasons,
                toggle: false
            });
        });

        $reasons.on('click', '.panel-heading', function () {
            $(this).parent().find('.panel-collapse').collapse('toggle');
        });
    }

    if ($bgCarousel.length) {

        bgcChangeSlide($bgCarousel);

    }

});