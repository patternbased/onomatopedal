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
  if (!pedalRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
  }
  pedalRequest.open('GET','pedalinfo.json?_=' + new Date().getTime(), true);
  pedalRequest.onload = function() {
  var pedalData = JSON.parse(pedalRequest.responseText);

// Rendering the page with PedalID

    // Content Distinations
    var onomoName = $('#onomoName');
    var pedalImg = $('#thePedal, #pedalSmall');
    var pedalDesc = $('#onomoInfo');
    var onomoColor = $('p#onomoInfo');
    var onomoHeader = $('#OnomoPedalHeader, .title-PlayMode');
    var eqdPedalLink = $('li#aboutPedal');
    var sampleJS = $('#sampleJS');
    var mobileKeyQ = $('#keyQ');
    var mobileKeyW = $('#keyW');
    var mobileKeyE = $('#keyE');
    var mobileKeyR = $('#keyR');
    var mobileKeyA = $('#keyA');
    var mobileKeyS = $('#keyS');
    var mobileKeyD = $('#keyD');
    var mobileKeyF = $('#keyF');
    var mobileKeyZ = $('#keyZ');
    var mobileKeyX = $('#keyX');
    var mobileKeyC = $('#keyC');
    var mobileKeyV = $('#keyV');
    var sampleDownload = $('#download');
  
    // render HTML
  
    var onomoNameString = pedalData[pedalNumber].onomoname;
    var pedalImgString = pedalData[pedalNumber].nameid;
    var pedalDescString = pedalData[pedalNumber].onomoDesc;
    var onomoColorString = pedalData[pedalNumber].hex;
    var onomoHeaderString = pedalData[pedalNumber].header;
    var eqdPedalLinkString = pedalData[pedalNumber].eqdurl;
    var sampleJSString = "playSampleJs/play-" + pedalImgString + '.js';
    var beatUrlString = pedalData[pedalNumber].beaturl;
    var samePedal = "#" + pedalNumber;
    var mobileKeyQString = pedalData[pedalNumber].keyq;
    var mobileKeyWString = pedalData[pedalNumber].keyw;
    var mobileKeyEString = pedalData[pedalNumber].keye;
    var mobileKeyRString = pedalData[pedalNumber].keyr;
    var mobileKeyAString = pedalData[pedalNumber].keya;
    var mobileKeySString = pedalData[pedalNumber].keys;
    var mobileKeyDString = pedalData[pedalNumber].keyd;
    var mobileKeyFString = pedalData[pedalNumber].keyf;
    var mobileKeyZString = pedalData[pedalNumber].keyz;
    var mobileKeyXString = pedalData[pedalNumber].keyx;
    var mobileKeyCString = pedalData[pedalNumber].keyc;
    var mobileKeyVString = pedalData[pedalNumber].keyv;
    var sampleDownloadString = pedalData[pedalNumber].sampleurl;

    $(sampleJS).attr("src", sampleJSString);
    $.getScript(sampleJSString);

//    let sampleScript = document.createElement('script');        
//    sampleScript.type = 'text/paperscript';
//    sampleScript.src = "playSampleJs/play-" + pedalImgString + '.js';
//    sampleScript.async = false;
//    sampleScript.canvas = "myCanvas";
//    document.body.appendChild(sampleScript);

    $(onomoName).html(onomoNameString).css("color", onomoColorString);
    $(pedalImg).attr("src","images/pedalsOnly/" + pedalImgString + "@2x.png");
    $(pedalDesc).html(pedalDescString);
    $(onomoColor).find('span').css("color", onomoColorString);
    $(onomoHeader).html(onomoHeaderString).css("color", onomoColorString);
    $(eqdPedalLink).on("click",function(){window.open(eqdPedalLinkString,'_blank');});
    $(samePedal).css("display", "none");
    $(mobileKeyQ).css("background-color", mobileKeyQString);
    $(mobileKeyW).css("background-color", mobileKeyWString);
    $(mobileKeyE).css("background-color", mobileKeyEString);
    $(mobileKeyR).css("background-color", mobileKeyRString);
    $(mobileKeyA).css("background-color", mobileKeyAString);
    $(mobileKeyS).css("background-color", mobileKeySString);
    $(mobileKeyD).css("background-color", mobileKeyDString);
    $(mobileKeyF).css("background-color", mobileKeyFString);
    $(mobileKeyZ).css("background-color", mobileKeyZString);
    $(mobileKeyX).css("background-color", mobileKeyXString);
    $(mobileKeyC).css("background-color", mobileKeyCString);
    $(mobileKeyV).css("background-color", mobileKeyVString);

    $(sampleDownload).click(function(e) {
      e.preventDefault();
      window.location.href = sampleDownloadString;
  });
  
    // ===== Action button animation =====

    if ( $(window).width() > 960 ) {
      $('.actionBtn').on('mouseenter',function () { 
        $(this).css({ 
          'width': '220px',
          'background': onomoColorString,
          'transition-duration':'50ms'
        });
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
      }

    // ===== Play the Beat =====

    function playBeat(params) {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', beatUrlString);
      
      audioElement.addEventListener('ended', function() {
          this.play();
      }, false);
  
      if (audioElement.play == true) {
        $(".playAudio > img, #pauseMobile > img").attr('src', "images/pauseBeat.svg");
        $(".playAudio > span, #pauseMobile > span").html("Pause");
    } else {
      $(".playAudio > img, #pauseMobile > img").attr('src', "images/playBeat.svg");
      if ($(window).width() > 960) {
      $(".playAudio > span, #pauseMobile > span").html("Play Beat");
      }
       }
       
      $('.playAudio, #pauseMobile').click(function() {
        if (audioElement.paused == false) {
          audioElement.pause();
          $(".playAudio > img, #pauseMobile > img").attr('src', "images/playBeat.svg");
          $(".playAudio > span, #pauseMobile > span").html("Play Beat");
      } else {
          audioElement.play();
          $(".playAudio > img, #pauseMobile > img").attr('src', "images/pauseBeat.svg");
          $(".playAudio > span, #pauseMobile > span").html("Pause");
         }
      });

      if ($(window).width() < 960) {
      $('#showAll').click(function() {
        audioElement.pause();
        $(".playAudio > img").attr('src', "images/playBeat.svg");
        $(".playAudio > span").html("Play Mode");
      });
      }
    };
    
  $(document).ready(function() {
    playBeat();
  });

    // ===== Change hex on Mobile view =====

  var eventFired = 0;
  if ($(window).width() < 960) {
    $('#playMode, #aboutPedal').css({
      'background': onomoColorString
    });     
  } else {
    eventFired = 1;
  }
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
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 678,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    }
  ]
});

// ===== Pedal page : MODE =====
// ===== Full browser mode in Pedal.html =====

function fullScreenStart() {
  $('#pedal').fadeOut(500);
  $('footer').css({
    'position': 'fixed',
  });
  $('#showAll, #pauseMobile').css({
    'visibility': 'visible'
  });
  $('.info, .title-small, .title-pedal, .footerLogo').css({
    'display':'none'
  });
  $('#playModeHeader, #mobileLogo').css({
    'display':'block'
  });
  $('.header').css({
    'border-bottom':'none'
  });
};

function tapKeys() {
  $('#tapKeyWrap').css({
    'display':'grid'
  });
};

$('#fullscreenMode, #playMode').click(function () {
  if ($(window).width() < 960) {
    // === Keytap on Mobile portrait
    if($(window).height() < $(window).width()){
      $('div#tapKeyWrap').css({
        'grid-template-columns' : 'auto auto auto auto',
        'height' : 'calc(100vh - 100px)',
        'margin' : '20px 20px 80px 20px'
      });
      $('.header').css({
        'display' : 'none'
      });
    }
    // Mobile Play mode (Full Screen + Beat Play)
  tapKeys(); 
  fullScreenStart();
  } else {
    // Full screen mode (HD)
  fullScreenStart();
  }
});

// Back from Full browser mode

function fullScreenEnd() {
  $('#pedal').fadeIn(300);
  $('footer').css({
    'position': 'static'
  });
  $('#showAll, #pauseMobile').css({
    'visibility': 'hidden'});
  $('.info, .title-small, .title-pedal').css({
      'display':'block'
    });
  $('.footerLogo').css({
    'display':'inline'
  });
  $('#playModeHeader, #mobileLogo').css({
      'display':'none'
    });
  $('#tapKeyWrap').css({
      'grid-template-columns' : 'auto auto auto',
      'height' : 'calc(100vh - 240px)',
      'margin' : '100px 20px 140px 20px'
  });
  $('.header').css({
      'display' : 'block',
      'border-bottom':'2px solid  rgba(33,47,61,0.5)'
  })
}

function tapKeysEnd() {
  $('#tapKeyWrap').css({
    'display':'none'
  });
};

$('#showAll').click(function () { 
  if ($(window).width() < 960) {
      tapKeysEnd(); 
      fullScreenEnd();
  } else {
    // Full screen mode (HD)
  fullScreenEnd();
  }
  });

  