$( document ).ready(function() {
  console.log('asd')

  $('.stream-slider').slick({
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.faqs-item__head').click(function () {
    $(this).parent().toggleClass('faqs-item--active');
    $(this).siblings('.faqs-item__body').slideToggle(250);

  });

  $('.work-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight: true,
    prevArrow: $('.work-slider__prev'),
    nextArrow: $('.work-slider__next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.projects-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.projects-slider__prev'),
    nextArrow: $('.projects-slider__next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.projects-tab__title').click(function () {
    $('.projects-tab').removeClass('projects-tab--active');
    $(this).parent().addClass('projects-tab--active');
  });

  $('.js-copy').click(function () {
    let value = $(this).data('value');
    if (navigator && navigator.clipboard && navigator.clipboard.writeText){
        return navigator.clipboard.writeText(value);
    }else{
      const el = document.createElement('textarea');
      el.value = value;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  });

});