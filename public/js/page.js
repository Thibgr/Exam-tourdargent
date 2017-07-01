//Load splash screen

$('section#secsplash').delay(1000).hide(0)
$('section#home').delay(1000).fadeIn(500)
$('header').delay(1000).fadeIn(500);

 $(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      freeMode: true,
      mousewheelControl: true,
    })        
  });