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
pedalRequest.open('GET','pedalinfo.json', true);
if(( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) | (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
pedalRequest.setRequestHeader('cache-control', 'no-cache');
}
pedalRequest.onload = function() {
var pedalData = JSON.parse(pedalRequest.responseText);

// Rendering the page with PedalID

  // Content Distinations
  var onomoName = $('#onomoName');
  var pedalImg = $('#thePedal, #pedalSmall');
  var pedalDesc = $('#onomoInfo');
  var trackName = $('#trackName');
  var trackInfo = $('#trackInfo');
  var onomoColor = $('p#onomoInfo');
  var onomoHeader = $('#OnomoPedalHeader');
  var onomoPlaymodeHeader = $('.title-PlayMode');
  var eqdPedalLink = $('li#aboutPedal');
  var sampleDownload = $('#download');
  var pedalPageTitle = $('#pedalPageTitle');
  var pedalName = $('#pedalName');
  var pedalInfo = $('#pedalInfo');

  // render HTML

  var onomoNameString = "<img src='images/onoName.svg'>" + pedalData[pedalNumber].onomoname;
  var pedalNameString = pedalData[pedalNumber].name;
  var pedalImgString = pedalData[pedalNumber].nameid;
  var pedalDescString = pedalData[pedalNumber].onomoDesc;
  var pedalDescStringJP = pedalData[pedalNumber].onomoDescJP;
  var trackNameString = "<img src='images/trackName.svg'>" + pedalData[pedalNumber].trackname;
  var trackInfoString = pedalData[pedalNumber].trackinfo;
  var onomoColorString = pedalData[pedalNumber].hex;
  var onomoHeaderString = pedalData[pedalNumber].onohiragana + " + " + pedalNameString;
  var onomoHeaderFullString = "<img src='images/pedalHeader-ono.svg'>" + pedalData[pedalNumber].onohiragana + " +<img src='images/pedalHeader-pedal.svg'>" + pedalNameString;
  var eqdPedalLinkString = pedalData[pedalNumber].eqdurl;
  var beatUrlString = pedalData[pedalNumber].beaturl;
  var samePedal = $('#carousel').find('[data-pedal-id="' + pedalNumber + '"]');
  var sampleDownloadString = pedalData[pedalNumber].sampleurl;
  var pedalPageTitleString = "OnomatoPedal - " + pedalNameString + " Sampler";
  var aboutBunniesString = "<img src='images/aboutBunnies.svg'><span>Check Out Bunnies</span>";
  var pedalNameStringIcon =  "<img src='images/pedalName.svg'>" + pedalData[pedalNumber].name;
  var bunnyNameStringIcon =  "<img src='images/bunnyName.svg'>" + pedalData[pedalNumber].name;
  var pedalInfoString = pedalData[pedalNumber].pedalinfo;

  $(pedalPageTitle).html(pedalPageTitleString);
  $(onomoName).html(onomoNameString).css("color", onomoColorString);
  $(pedalImg).attr("src","images/pedalsOnly/" + pedalImgString + "@2x.png");
  if (localStorage.getItem("language") == 'jp') {  
    $(pedalDesc).html(pedalDescStringJP);
  } else {
    $(pedalDesc).html(pedalDescString);
  }
  $(trackName).html(trackNameString).css("color", onomoColorString);
  $(trackInfo).html(trackInfoString);
  $(pedalInfo).html(pedalInfoString);

  $(onomoColor).find('span').css("color", onomoColorString);
  $(onomoHeader).css("background-color", onomoColorString);
  $(onomoHeader).html(onomoHeaderFullString);  
  $(onomoPlaymodeHeader).html(onomoHeaderString).css("color", onomoColorString);

  if(pedalNumber == 17) {
    $(eqdPedalLink).html(aboutBunniesString).on("click",function(){window.open(eqdPedalLinkString,'_blank');});
    $(pedalName).html(bunnyNameStringIcon).css("color", onomoColorString);
  } else {
    $(eqdPedalLink).on("click",function(){window.open(eqdPedalLinkString,'_blank');});
    $(pedalName).html(pedalNameStringIcon).css("color", onomoColorString);
  }

  $(samePedal).css("display", "none");

  $(sampleDownload).click(function(e) {
    e.preventDefault();
    window.location.href = sampleDownloadString;
});
$('.en').click(function(){
  $(pedalDesc).html(pedalDescString);
});
$('.jp').click(function(){
  $(pedalDesc).html(pedalDescStringJP);
});

  // ===== Action button animation =====

  if (($(window).width() < 960) | ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) | (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
  } else {
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
    if (($(window).width() < 960) | ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) | (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
    } else {
    $("#pauseMobile > span, #pauseMobile > span").html("Play Track");
    }
    }
     
    $('.playAudio, #pauseMobile').click(function() {
      if (audioElement.paused == false) {
        audioElement.pause();
        $(".playAudio > img, #pauseMobile > img").attr('src', "images/playBeat.svg");
        $(".playAudio > span, #pauseMobile > span").html("Play Track");
    } else {
        audioElement.play();
        $(".playAudio > img, #pauseMobile > img").attr('src', "images/pauseBeat.svg");
        $(".playAudio > span, #pauseMobile > span").html("Pause");
       }
    });

    if (($(window).width() < 960) || ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) | (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
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

if ($(window).width() < 960) {
  $('#playMode, #aboutPedal').css({
    'background': onomoColorString
  });     
} else {
}
$(window).on('resize', function() {
  if ($(window).width() < 960) {
    $('#listenBeat, #aboutPedal').css({
      'background': onomoColorString
    });
  }
});
$(window).on('resize', function() {
  if (($(window).width() < 960) | ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) | (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
  } else {
    $('#listenBeat, #aboutPedal').css({
      'background': '#FFFFFF'
    });
  }
});

if(( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) | (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
  $('#actions').css({
    'height': '140px'
  });
  $('#playMode, #aboutPedal').css({
    'width': '220px',
    'background': onomoColorString,
    'float': 'none'
  });
  $('#playMode > span, #aboutPedal > span').css({
    'display': 'inline-block'
  });
  $('#playMode > span').html('Play Mode');
  $('#listenBeat, #download, #fullscreenMode').css({
    'display': 'none'
  });
  $('#playMode').css({
    'display': 'block'
  });
}
};
pedalRequest.send();

// ===== End of rendering HTML while loading =====

// ===== More Pedals Carousel in Pedal.html =====

$('#carousel').slick({
prevArrow: $('.prev'),
nextArrow: $('.next'),
infinite: true,
speed: 300,
slidesToShow: 8,
slidesToScroll: 4,
responsive: [
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 3,
    }
  },
  {
    breakpoint: 687,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  }
]
});

// ===== Pedal page : MODE =====
// ===== Full browser mode in Pedal.html =====

function fullScreenStart() {
$('#pedal').fadeOut(500);
$('footer, .info, .title-small, .title-pedal, .footerLogo, .header').css({
  'display':'none'
});
$('#playModeHeader, #mobileLogo, #showAll, #pauseMobile, #playModeIcons').css({
  'display':'block'
});
$("body").css("overflow", "hidden");
};

function fullScreenLandscape() {
$('#pedal').fadeOut(500);
$('footer, #playModeHeader, .header, .info, .title-small, .title-pedal, .footerLogo').css({
  'display':'none'
});
$('#mobileLogo, #showAll, #pauseMobile, #playModeIcons').css({
  'display':'block'
});
$('#tapKeyWrap').css({
  'grid-template-columns': 'auto auto auto auto',
  'height' : 'calc(100% - 100px)',
  'margin' : '80px 20px 20px 20px'
});
$('.tapKey').css({
  'margin': '6px'
});
$('#playModeIcons').css({
  'top' : '0'
});
$('#mobileLogo').css({
  'top': '15px'
});
$("body").css("overflow", "hidden");
};

function tapKeys() {
$('#tapKeyWrap').css({
  'display':'grid'
});
};

$('#fullscreenMode, #playMode').click(function () {
if(( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) | (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) { 
  // Mobile Play mode (Full Screen + Beat Play)
  if($(window).height() < $(window).width()){
    fullScreenLandscape();
  } else {
    fullScreenStart();
  }
//  openFullscreen()
  tapKeys(); 
} else {
  // Full screen mode (HD)
fullScreenStart();
}
});

// Back from Full browser mode

function fullScreenEnd() {
$('#pedal').fadeIn(300);
$('#showAll, #pauseMobile').css({
  'display': 'none'});
$('footer, .info, .title-small, .title-pedal').css({
    'display':'block'
  });
$('.footerLogo').css({
  'display':'inline'
});
$('.header').css({
    'display':'block'
});
$('#playModeHeader, #mobileLogo, #showAll, #pauseMobile, #playModeIcons').css({
  'display':'none'
});
$('#tapKeyWrap').css({
  'grid-template-columns': 'auto auto auto',
  'height' : 'calc(100% - 180px)',
  'margin' : '80px 20px 100px 20px'
});
$('.tapKey').css({
  'margin': '8px'
});
$('#playModeIcons').css({
  'bottom' : '0',
  'top' : 'unset'
});
$('#mobileLogo').css({
  'bottom': '15px',
  'top': 'unset'
});
$("body").css("overflow", "auto");
}

function tapKeysEnd() {
$('#tapKeyWrap').css({
  'display':'none'
});
};

$('#showAll').click(function () { 
    tapKeysEnd(); 
    fullScreenEnd();
//    closeFullscreen()
});