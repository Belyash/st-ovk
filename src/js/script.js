$(function() {
    var $carousel = $('.jcarousel__wrap');

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
});