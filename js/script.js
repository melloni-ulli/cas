$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.header_burger').toggleClass('active');
    });
    $('#catalog').click(function() {
        if ($('#catalog').hasClass('active')) {
            setTimeout(function() { 
                $('.fade_open').css('opacity', '0');
                $('.menu_drop').css('opacity', '0');
            },50);
            $('.fade_open, .menu_drop, #catalog').removeClass('active');
        } else {
            $('.fade_open, .menu_drop, #catalog').addClass('active');
            setTimeout(function() { 
                $('.fade_open').css('opacity', '1');
                $('.menu_drop').css('opacity', '1');
            },50);
        }
    });
    $('.intro_carousel').slick({
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
    });

    $('.best_tabs_link').click(function(e) {
        e.preventDefault();

        $('.best_tabs_link').removeClass('open');
        $('.best_tabs_item').removeClass('open');

        $(this).addClass('open');
        $($(this).attr('href')).addClass('open');
    });

    $('.best_tabs_link:first').click();

    $('.prod_carousel_new').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.prod_carousel_leaders').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
});