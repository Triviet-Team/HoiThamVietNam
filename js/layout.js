$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  items: 1,
  center:true,
  autoHeight: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  navText: [
    "<i class='mdi mdi-chevron-left'></i>", 
    "<i class='mdi mdi-chevron-right'></i>"
  ],
  autoplaySpeed: 1000,
});

// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});

$('.member-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  nav: false,
  items: 3,
  margin: 30,
  autoplaySpeed: 1000,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>", 
    "<i class='mdi mdi-chevron-right'></i>"
  ],
  responsive : {
    0 : {
      items: 1
    },
    576 : {
      items: 2, 
    },
    992 : {
      items: 3, 
    },
    1400 : {
      items: 3,
    }
  }
});

// ANIMATION
wow = new WOW(
  {
  mobile: false,
  }
)
wow.init();



$(document).ready(() => {
  const ww = document.body.clientWidth;
  const url = window.location.href;



  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });


  $('.wow').attr('data-wow-duration', '.5s');


  $('.toggleMenu').click(() => {
    $('.nav').addClass('out');
    $('.overlay-menu').addClass('overlay-in');
  });


  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
  });

 
  
  $(".nav a").each( function () {
    if (url == (this.href)) {
      $(this).closest("a").addClass("active");
      $(this).parent().parent().parent().parent().addClass("active")
    }
  });

});
