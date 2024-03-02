/*=============================================
                Wow
===============================================*/
$(function () {
    new WOW().init();
});

/*=============================================
                Skitter
===============================================*/
$(function() {
  $('.skitter-large').skitter();
});

/*=============================================
                Back To Top
===============================================*/
// Show / Hide button
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("#back-to-top").fadeOut();
        } else {
            $("#back-to-top").fadeIn();
        }
    });
});
// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});

