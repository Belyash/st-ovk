$(function() {
    var $carousel = $('.jcarousel__wrap'),
        $reasons = $('#reasons-accordion');

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

        $reasons.find('h4').each(function () {
            $(this).parents('.panel').find('.panel-collapse').collapse({
                parent: $reasons,
                toggle: false
            });
        });

        $reasons.on('click', 'h4', function () {
            $(this).parents('.panel').find('.panel-collapse').collapse('toggle');
        });
    }

});