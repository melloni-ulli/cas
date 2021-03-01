/*Scroll Header */

let header = $('.header');
let headerBtn = $('.header__phone');
scrollPrev = 0;

$(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (scrolled >= 150) {
        header.addClass('dark');
        headerBtn.addClass('red');
    } else if (scrolled <= 200) {
        header.removeClass('dark');
        headerBtn.removeClass('red');
    }

    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

// Спойлер

$('.faq__title').click(function (event) {
    if ($('.faq__content').hasClass('open')) {
        $('.faq__title').not($(this)).removeClass('active');
        $('.faq__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
});

/*Popup*/

const popupCall = $('[data-popup]');
const popupClose = $('[data-close]');

popupCall.on('click', function (event) {
    event.preventDefault();

    let $this = $(this);
    let popupID = $this.data('popup');

    $(popupID).addClass('open');
    $('body').addClass('no-scroll');


    setTimeout(function () {
        $(popupID).find('.popup__body').css({
            transform: 'scale(1)'
        });
    }, 100);

});

popupClose.on('click', function (event) {
    event.preventDefault();

    let $this = $(this);
    let popupParent = $this.parents('.popup');

    popupParent.find('.popup__body').css({
        transform: 'scale(0)'
    });

    setTimeout(function () {
        popupParent.removeClass('open');
        $('body').removeClass('no-scroll');
    }, 200);
});

$('.popup').on('click', function (event) {
    let $this = $(this);
    $this.find('.popup__body').css({
        transform: 'scale(0)'
    });

    setTimeout(function () {
        $this.removeClass('open');
        $('body').removeClass('no-scroll');
    }, 200);
});

$('.popup__content').on('click', function (event) {
    event.stopPropagation();
});