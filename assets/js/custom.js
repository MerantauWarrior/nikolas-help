$( document ).ready(function() {
  console.log('asd')

  $('.projects-slider').slick({
    dots: false,
    infinite: false,
    speed: 250,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $('.projects-slider__prev'),
    nextArrow: $('.projects-slider__next')
  });

  $('.projects-tab__title').click(function () {
    $('.projects-tab').removeClass('projects-tab--active');
    $(this).parent().addClass('projects-tab--active');
  });

});