/* ========== Mobile view ========== */

var eventFired = 0;

if ($(window).width() < 960) {
// Top page mobile
$('#randomDivMobile').css({
  'display':'inline-block'
  });
  $('#pedalTable').css({
    'max-width':'839px',
    'width':'100%'
  });
  $('#randomDiv').css({
    'display':'none'
  }); 
  $('.pedalList').css({
    'width':'220px',
    'max-width':'30%',
    'padding':'30px'
  });
// Pedal page mobile
$('#morePedals').css({
  'width':'100vw'  
  });
$('#carousel, #carouselWindow').css({
  'width':'calc(100vw - 100px)'  
  });
$('#actions').css({
  'height':'140px'
});  
$('#listenBeat, #aboutPedal').css({
  'width': '220px',
  'background': '#dfc669',
  'float':'none'  
  });     
$('#listenBeat > span, #aboutPedal > span').css({
  'display':'inline-block'  
  });
$('#listenBeat > span').html('Play Mode'  
  );   
$('#download, #fullscreenMode').css({
    'display':'none'  
    });
$('#listenBeat').addClass('fullScreenMode');
// Global elements
$('footer').css({
  'margin-top':'50px'  
});
$('.footerLogo').css({
  'margin':'10px'  
});
$('.wrap').css({
  'min-height':'calc(100vh - 150px)'  
});
} else {
    eventFired = 1;};

$(window).on('resize', function() {
    if ($(window).width() < 960) {
      $('#randomDivMobile').css({
        'display':'inline-block'
        });
        $('#pedalTable').css({
          'max-width':'839px',
          'width':'100%'
        });
        $('#randomDiv').css({
          'display':'none'
        }); 
        $('.pedalList').css({
          'width':'220px',
          'max-width':'30%',
          'padding':'30px'
        });
    // Pedal page mobile
      $('#morePedals').css({
        'width':'100vw'  
        });
      $('#carousel, #carouselWindow').css({
        'width':'calc(100vw - 100px)'  
        });
        $('#actions').css({
          'height':'140px'
        });  
        $('#listenBeat, #aboutPedal').css({
          'width': '220px',
          'background': '#dfc669',
          'float':'none'  
          });     
        $('#listenBeat > span, #aboutPedal > span').css({
          'display':'inline-block'  
          });
        $('#listenBeat > span').html('Play Mode'  
          );   
        $('#download, #fullscreenMode').css({
            'display':'none'  
            });
        $('#listenBeat').addClass('fullScreenMode');
    // Global elements
      $('footer').css({
        'margin-top':'50px'  
      });
      $('.footerLogo').css({
        'margin':'10px'  
      });
      $('.wrap').css({
        'min-height':'calc(100vh - 150px)'  
      });
  }
});

$(window).on('resize', function() {
if ($(window).width() > 960) {
  $('#randomDivMobile').css({
    'display':'none'
  });
  $('#pedalTable').css({
    'max-width':'900px',
    'width':'90%'
  });
  $('#randomDiv').css({
    'display':'block'
  }); 
  $('.pedalList').css({
    'width':'240px',
    'padding':'20px'
  });
// Pedal page mobile
$('#morePedals').css({
  'width':'80vw'  
  });
$('#carousel, #carouselWindow').css({
  'width':'calc(80vw - 100px)'  
  });
  $('#actions').css({
    'height':'70px'
  });  
  $('#listenBeat, #aboutPedal').css({
    'width': '50px',
    'background': '#FFFFFF',
    'float':'left'  
    });     
  $('#listenBeat > span, #aboutPedal > span').css({
    'display':'none'  
    });
  $('#listenBeat > span').html('Listen to Beat'  
    );   
  $('#download, #fullscreenMode').css({
      'display':'block'  
      });
  $('#listenBeat').removeClass('fullScreenMode');
// Global elements
$('footer').css({
  'margin-top':'auto'  
});
$('.footerLogo').css({
  'margin':'30px'  
});
$('.wrap').css({
  'min-height':'calc(100vh - 100px)'  
});
} 
});

/////////////////////////////////////////////

// ===== Top page Pedal Shuffle =====
function randomize() {
  var allBanners = $('#pedalTable a');
  shuffle(allBanners.hide()).slice(10).show();    
}

$('#randomDiv, #randomDivMobile').click(randomize);
randomize();

// shuffling lists is a bit involved; code borrowed from here:
function shuffle(array) {
var currentIndex = array.length, 
    temporaryValue, 
    randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}

return array;
}


// ===== Right side sliding panel =====

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

// ===== Pedal page Action buttons animation =====

if ( $(window).width() > 960 ) {

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
};

// ===== Pedal page Full browser mode =====

$('#fullscreenMode, .fullScreenMode').click(function () { 
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

// ===== Open Pedal page in EQD =====
$("li#aboutPedal").on("click",function(){
  window.open('https://www.earthquakerdevices.com/acapulco-gold','_blank');
});

// ===== More Pedals Carousel =====

$('#carousel').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*
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
};
*/