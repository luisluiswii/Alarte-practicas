$(document).ready(function() {
    $('.material-button-toggle').click(function() {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
});
$(document).ready(function () {
    $('.navbar-toggle').click(function () {
        $('.social_media_div'). toggle(); // Alterna la visibilidad
    });
});
