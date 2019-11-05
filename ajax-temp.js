// Get PedalID as URL Parameter
  var pedalIDParam = new URLSearchParams(window.location.search);
  var keys = pedalIDParam.keys();
  for (key of keys);
  var entries = pedalIDParam.entries();
  for(pair of entries);
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
var pedalNumber = getUrlParameter('pedalid'); 
  
// Connect to JSON
  var pedalRequest = new XMLHttpRequest();
  pedalRequest.open('GET','pedalinfo.json');
  pedalRequest.onload = function() {
  var pedalData = JSON.parse(pedalRequest.responseText);

// Rendering the page with PedalID

    // Content Distinations
    var onomoName = $('#onomoName');
    var pedalImg = $('#thePedal');
    var pedalDesc = $('#onomoInfo');
    var onomoColor = $('p#onomoInfo');
    var onomoHeader = $('#OnomoPedalHeader');
    var eqdPedalLink = $('li#aboutPedal');
    var sampleJS = $('#sampleJS');
    var pedalSlides = $('.slides');
  
    // render HTML
  
    var onomoNameString = pedalData[pedalNumber].onomoname;
    var pedalImgString = pedalData[pedalNumber].nameid;
    var pedalDescString = pedalData[pedalNumber].onomoDesc;
    var onomoColorString = pedalData[pedalNumber].hex;
    var onomoHeaderString = pedalData[pedalNumber].header;
    var eqdPedalLinkString = pedalData[pedalNumber].eqdurl;
    var beatUrlString = pedalData[pedalNumber].beaturl;
    var samePedal = "#" + pedalNumber;
  
    $(onomoName).html(onomoNameString).css("color", onomoColorString);
    $(pedalImg).attr("src","images/pedalsOnly/" + pedalImgString + "@2x.png");
    $(pedalDesc).html(pedalDescString);
    $(onomoColor).find('span').css("color", onomoColorString);
    $(onomoHeader).html(onomoHeaderString).css("color", onomoColorString);
    $(eqdPedalLink).on("click",function(){window.open(eqdPedalLinkString,'_blank');});
    $(sampleJS).attr("src", "playSampleJs/play-" + pedalImgString + '.js');
    $(samePedal).css("display", "none");
  
    // ===== Action button animation =====

    if ( $(window).width() > 960 ) {
      $('.actionBtn').on('mouseenter',function () { 
        $(this).css({ 
          'width': '220px',
          'background': onomoColorString,
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

    // ===== Play the Beat =====

  $(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', beatUrlString);
    
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

    // ===== Change hex on Mobile view =====
  var eventFired = 0;
  if ($(window).width() < 960) {
    $('#listenBeat, #aboutPedal').css({
      'background': onomoColorString
    });     
  } else {
    eventFired = 1;
  };
  $(window).on('resize', function() {
    if ($(window).width() < 960) {
      $('#listenBeat, #aboutPedal').css({
        'background': onomoColorString
      });
    }
  });
  $(window).on('resize', function() {
    if ($(window).width() > 960) {
      $('#listenBeat, #aboutPedal').css({
        'background': '#FFFFFF'
      });
    }
  });

  };
  pedalRequest.send();

// ===== End of rendering HTML while loading =====
// ===== More Pedals Carousel in Pedal.html =====

$('#carousel').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: true,
  speed: 300,
  slidesToShow: 9,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
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
  ]
});