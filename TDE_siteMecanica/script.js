$('#botao-avaliar').click(function() {
    $('html, body').animate({
        scrollTop: $('#contato').offset().top
    }, 1000);
});

$('a[href^="#"]').click(function() {
    var alvo = $($(this).attr('href'));
    $('html, body').animate({
        scrollTop: alvo.offset().top
    }, 1000);
    return false;
});

$(document).ready(function() {
    $(window).scroll(function() {
        $('#servicos').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 50) {
                $(this).css('opacity', '1');
            }
        });

        $('#contato').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 50) {
                $(this).css('opacity', '1');
            }
        });

        $('#footer').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 50) {
                $(this).css('opacity', '1');
            }
        });
    });
});