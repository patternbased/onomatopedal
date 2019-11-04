// ===== Ajax Template stuff for Pedal page is in script.js

// ===== Action button animation =====

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

// ===== See the Pedal in EQD =====

$("li#aboutPedal").on("click",function(){
  window.open('https://www.earthquakerdevices.com/acapulco-gold','_blank');
});

// ===== More Pedals Carousel =====

$('#carousel').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }
  ]
});

// ===== Play the Beat =====

$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'sounds/beats/IceDisco.mp3');
  
  audioElement.addEventListener('ended', function() {
      this.play();
  }, false);

  
  $('.playAudio').click(function() {
    if (audioElement.paused == false) {
      audioElement.pause();
      $(".playAudio > img").attr('src', "images/playBeat.svg");
      $(".playAudio > span").html("Play Beat");
  } else {
      audioElement.play();
      $(".playAudio > img").attr('src', "images/pauseBeat.svg");
      $(".playAudio > span").html("Pause");  };
  });

  $('#showAll').click(function() {
    audioElement.pause();
    $(".playAudio > img").attr('src', "images/playBeat.svg");
    $(".playAudio > span").html("Play Beat");
  });
});

// ===== Full browser mode =====

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
