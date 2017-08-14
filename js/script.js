$(function() {

    var animationName = 'animated rubberBand';
    var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('a.button').on('click', function() {
        $('input[name=firstName]').addClass(animationName).one(animationend, function() {
            $(this).removeClass(animationName);
        });

    });

});