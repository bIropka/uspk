$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    if ($(window).width() < '992'){

    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '992'){

        } else {
            
        }
    });

    /******************************
     ******* other scripts ********
     ******************************/

    $('header .order').click(function(){
        $('html, body').animate({scrollTop: $('#form-order').offset().top}, 800);
        return false;
    });

    $(function($) {
        $('form').validatr({
            showall: true,
            valid: function() {
                // Получение ID формы
                var formID = $(this).attr('id');
                // Добавление решётки к имени ID
                var formNm = $('#' + formID);
                var scriptFile;
                if (formID == 'form-order') scriptFile = 'mail-order.php';
                if (formID == 'form-callback') scriptFile = 'mail-callback.php';
                $.ajax({
                    type: "POST",
                    url: scriptFile,
                    data: formNm.serialize(),
                    success: function (data) {
                        $('.window-order').fadeOut();
                        $('.window-successful').fadeIn();
                    },
                    error: function (data) {
                        $('.window-order').fadeOut();
                        $('.window-error').fadeIn();
                    }
                });
                return false;
            }
        });
    });


    $('.form-submit').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        $(this).parents('form').find('.no-checked').removeClass('invalid-field');
    });

    $('.callback').click(function () {
        $('.window-callback').fadeIn();
    });
    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('#form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
    });
    $('.window-successful').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.message-successful')).length) $('.window-successful').fadeOut();
    });
    $('.message-successful button').click(function() {
        $('.window-successful').fadeOut();
    });
    $('.window-error').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.message-error')).length) $('.window-error').fadeOut();
    });
    $('.message-error button').click(function() {
        $('.window-error').fadeOut();
    });

    $('input').on('focus', function() {
        $(this).removeClass('valid-field invalid-field');
    });

    $('input[type="tel"]').mask("+7 ( 999 ) 999 - 99 - 99");
    $('input[type="tel"]').click(function() {
        $(this).focus();
    });

    /*******************************
     ******* slider scripts ********
     ******************************/

    $('.slider-logisticians').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
        ]
    });

});

