$(function(){
    $('.js-behaviour-choice').each(function(){
        var $parent = $(this).parents('fieldset');

        $(this).on('change', function(){
            var val = $(this).find('input:checked').val();

            if (val === 'question') {
                $('.js-description, .js-datatype, .js-required, .js-protected', $parent).removeClass('js-hidden');
                $('.js-notice', $parent).addClass('js-hidden');
            } else if (val === 'notice') {
                $('.js-notice, .js-protected', $parent).removeClass('js-hidden');
                $('.js-description, js-datatype, .js-required', $parent).addClass('js-hidden');
            } else if (val === 'hidden') {
                $('.js-protected', $parent).removeClass('js-hidden');
                $('.js-datatype, .js-required, .js-description, .js-notice', $parent).addClass('js-hidden');
            } else if (val === 'server') {
                $('.js-protected', $parent).removeClass('js-hidden');
                $('.js-datatype, .js-required, .js-description, .js-notice', $parent).addClass('js-hidden');
            } else {
                $('.js-datatype, .js-required, .js-description, .js-protected, .js-notice', $parent).addClass('js-hidden');
            }
        });
    });

    $('.js-datatype').on('change', function(){
        if ( $(this).children('select').val() === 'list' ) {
            $('.js-datatype-list').removeClass('js-hidden');
        } else {
            $('.js-datatype-list').addClass('js-hidden');
        }
    });

    $('.js-hidden-until-previous-checkbox-checked').each(function(){
        var $target = $(this);
        var $checkbox = $(this).prev().find(':checkbox').eq(0);
        $checkbox.on('change', function(){
            $target.toggleClass('js-hidden', ! $checkbox.is(':checked') );
        });
    });
});
