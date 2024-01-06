$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
});