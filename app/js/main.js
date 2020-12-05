$(function () {

  $('.slider__inner').slick({
    dots: true,
    arrows: false
  });

  var mixerOne = mixitup('.products__mix', {
    controls: {
        scope: 'local'
    }
  });

  var mixerTwo = mixitup('.trend__mix', {
      controls: {
          scope: 'local'
      }
  });

  
});