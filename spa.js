// Insert this script at the end of Pedal.html
// in order to switch pedals without reloading the page.
// Problem 1: Audio files won't be switched. They just keep playing over previous song
// Problem 2: Play Sample JS won't be switched / reloaded.

var pedalRequestCarousel = new XMLHttpRequest();
pedalRequestCarousel.open('GET','pedalinfo.json');
pedalRequestCarousel.setRequestHeader('Cache-Control', 'no-cache');

// Get PedalID from More Pedals Carousel
var pedalSwitch = $('.slide');
$(pedalSwitch).click(function() {
  var thisPedalSwitch = event.currentTarget;
  // Get id#
  var pedalNumberCarousel = $(thisPedalSwitch).attr("id");    
  // Connect to JSON
  var pedalData = JSON.parse(pedalRequestCarousel.responseText);

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

  // render HTML
  var onomoNameString = pedalData[pedalNumberCarousel].onomoname;
  var pedalImgString = pedalData[pedalNumberCarousel].nameid;
  var pedalDescString = pedalData[pedalNumberCarousel].onomoDesc;
  var onomoColorString = pedalData[pedalNumberCarousel].hex;
  var onomoHeaderString = pedalData[pedalNumberCarousel].header;
  var eqdPedalLinkString = pedalData[pedalNumberCarousel].eqdurl;
  var beatUrlString = pedalData[pedalNumberCarousel].beaturl;
  var samePedal = "#" + pedalNumberCarousel;
  var mobileKeyQString = pedalData[pedalNumberCarousel].keyq;
  var mobileKeyWString = pedalData[pedalNumberCarousel].keyw;
  var mobileKeyEString = pedalData[pedalNumberCarousel].keye;
  var mobileKeyRString = pedalData[pedalNumberCarousel].keyr;
  var mobileKeyAString = pedalData[pedalNumberCarousel].keya;
  var mobileKeySString = pedalData[pedalNumberCarousel].keys;
  var mobileKeyDString = pedalData[pedalNumberCarousel].keyd;
  var mobileKeyFString = pedalData[pedalNumberCarousel].keyf;
  var mobileKeyZString = pedalData[pedalNumberCarousel].keyz;
  var mobileKeyXString = pedalData[pedalNumberCarousel].keyx;
  var mobileKeyCString = pedalData[pedalNumberCarousel].keyc;
  var mobileKeyVString = pedalData[pedalNumberCarousel].keyv;

  $(onomoName).html(onomoNameString).css("color", onomoColorString);
  $(pedalImg).attr("src","images/pedalsOnly/" + pedalImgString + "@2x.png");
  $(pedalDesc).html(pedalDescString);
  $(onomoColor).find('span').css("color", onomoColorString);
  $(onomoHeader).html(onomoHeaderString).css("color", onomoColorString);
  $(eqdPedalLink).on("click",function(){window.open(eqdPedalLinkString,'_blank');});
  $(sampleJS).attr("src", "playSampleJs/play-" + pedalImgString + '.js').load();
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
  

  // ===== Reload Sample js and beat =====


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

  function playBeat(params) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', beatUrlString);
    audioElement.load();

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    if (audioElement.play == true) {
      audioElement.load();
      $(".playAudio > img, #pauseMobile > img").attr('src', "images/pauseBeat.svg");
      $(".playAudio > span, #pauseMobile > span").html("Pause");
  } else {
    $(".playAudio > img, #pauseMobile > img").attr('src', "images/playBeat.svg");
    $(".playAudio > span, #pauseMobile > span").html("Play Beat");
     };
     
    $('.playAudio, #pauseMobile').click(function() {
      if (audioElement.paused == false) {
        audioElement.pause();
        $(".playAudio > img, #pauseMobile > img").attr('src', "images/playBeat.svg");
        $(".playAudio > span, #pauseMobile > span").html("Play Beat");
    } else {
        audioElement.play();
        $(".playAudio > img, #pauseMobile > img").attr('src', "images/pauseBeat.svg");
        $(".playAudio > span, #pauseMobile > span").html("Pause");
       };
    });

    if ($(window).width() < 960) {
    $('#showAll').click(function() {
      audioElement.pause();
      $(".playAudio > img").attr('src', "images/playBeat.svg");
      $(".playAudio > span").html("Play Mode");
    });
    };
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

var newpedalSampleString = "playSampleJs/play-" + pedalImgString + ".js";
var currentSampleString = sampleJS.attr("src");

// ====== Replacing external js ======

function createjscssfile(filename, filetype){
  if (filetype=="js"){ //if filename is a external JavaScript file
      var fileref=document.createElement('script')
      fileref.setAttribute("type","text/javascript")
      fileref.setAttribute("src", filename)
  }
  return fileref
};

function replacejscssfile(oldfilename, newfilename, filetype){
  var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
  var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
  var allsuspects=document.getElementsByTagName(targetelement)
  for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
          var newelement=createjscssfile(newfilename, filetype)
          allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
      }
  };
};

replacejscssfile(currentSampleString, newpedalSampleString, "js") //Replace all occurences of "oldscript.js" with "newscript.js"


});
pedalRequestCarousel.send();

