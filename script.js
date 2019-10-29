// 


// Right side panel

$('.info').click(function () { 
  $('.rightSPWrapper').css({
    'right':'0', 
    'transition-duration':'300ms'});
});
$('.close').click(function () { 
  $('.rightSPWrapper').css({
    'right':'-360px', 
    'transition-duration':'300ms'});
});

// Pedal page Action buttons animation

$('.actionBtn').on('mouseenter',function () { 
  $(this).css({ 
    'width': '220px',
    'background': '#dfc669',
    'transition-duration':'50ms'
  }),
  $('span', this).css({
    'display':'inline'
  })
});
$('.actionBtn').on('mouseleave',function() {
  $('span', this).css('display','none'),
  $(this).css({
    'width': '50px',
    'background': '#ffffff',
    'transition-duration':'100ms'
  })
});

// Full browser mode

$('#fullscreenMode').click(function () { 
  $('#pedal').fadeOut(500);
  $('footer').css({
    'position': 'fixed',
  });
  $('#showAll').css({
    'visibility': 'visible'
  });
});

// Back from Full browser mode

$('#showAll').click(function () { 
  $('#pedal').fadeIn(300);
  $('footer').css({
    'position': 'static',
  });
  $('#showAll').css({
    'visibility': 'hidden'});
  });

// Open Pedal page in EQD
$("li#aboutPedal").on("click",function(){
  window.open('https://www.earthquakerdevices.com/acapulco-gold','_blank');
});

// More Pedals Carousel
var carousel = $('#carousel'),
    threshold = 80,
    slideWidth = 110,
    dragStart, 
    dragEnd;

$('#next').click(function(){ shiftSlide(-1) })
$('#prev').click(function(){ shiftSlide(1) })

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
  setTimeout(function(){
    if (direction === 1) {
     $('.slide:first').before($('.slide:last'));
    } else if (direction === -1) {
      $('.slide:last').after($('.slide:first'));
    }
    carousel.removeClass('transition')
		carousel.css('transform','translateX(0px)'); 
  }, 400)
}

    /* ========== Mobile view ========== */

    var eventFired = 0;

if ($(window).width() < 960) {
  $('#morePedals').css({
    'width':'100vw'  });
  $('#carousel, #carouselWindow').css({
    'width':'calc(100vw - 100px)'  });
  $('.footerLogo').css({
    'width':'150px',
    'margin':'10px'
    });
  $('footer').css({
    'height':'60px'  });
} else {
    eventFired = 1;}

$(window).on('resize', function() {
   if (!eventFired) {
    if ($(window).width() < 960) {
      $('#morePedals').css({
         'width':'100vw'  });
      $('#carousel, #carouselWindow').css({
         'width':'calc(100vw - 100px)'  });
         $('.footerLogo').css({
          'width':'150px',
          'margin':'10px'
          });
        $('footer').css({
          'height':'60px'  });
  } else { }
    }
});