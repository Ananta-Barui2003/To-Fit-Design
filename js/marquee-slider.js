jQuery(document).ready(function($) {
    $('.logo_wrap').slick({
      speed: 6000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: false,
      cssEase: 'linear',
      slidesToShow: 1,
      draggable:false,
      focusOnSelect:false,
      pauseOnFocus:false,
      pauseOnHover:false,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false
    });
  });