// Make the modal closable once the page is fully loaded
window.onload = function() {
  $('.loadingSpinner, #modalBG').css('display','none');
  window.scrollTo(0,1);

  if (( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) | (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) {
  } else { 
    if (localStorage.getItem("modal") === null) {
      $('.modalContent, #modalBG').css('display','block');
      }
    }

    if (localStorage.getItem("language") == 'jp') {
      $('.jp').addClass('languageActive');
      $('.en').removeClass('languageActive');
      } else {
        $('.en').addClass('languageActive');
        $('.jp').removeClass('languageActive');
        }
  };
    
// ===== Top page Pedal Shuffle =====

function randomize() {
  var allBanners = $('#pedalTable img');
  shuffle(allBanners.hide()).slice(17).show();    
}

$('#randomDiv').click(randomize);
randomize();

function shuffle(array) {
var currentIndex = array.length, 
    temporaryValue, 
    randomIndex;

while (0 !== currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}
return array;
}

$('#randomDiv').mouseover( function() {
  $('#topPageHeader').addClass('addAnimation');
});

$('#randomDiv').mouseleave( function() {
  $('#topPageHeader').removeClass('addAnimation');
});

// ===== English // Japanese =====

var language; 
function getLanguage() {
(localStorage.getItem('language') == null) ? setLanguage('en') : true;

var languageRequest = new XMLHttpRequest();
if (!languageRequest) {  alert('Giving up :( Cannot create an XMLHTTP instance');}
var languageURL = 'language/' +  localStorage.getItem('language') + '.json';
languageRequest.open('GET', languageURL , true);
languageRequest.onload = function() {
    var languageData = JSON.parse(languageRequest.responseText);
    $('#aboutOP').html( languageData.aboutOP );
    $('#howToPlay').html( languageData.howToPlay );
    $('#freeSamplePack').html( languageData.freeSamplePack );
    $('#credit').html( languageData.credits );
    $('#modalMessage').html(languageData.modalMessage);
    $('#bannerTop').html(languageData.bannerEqdMerch);
    $('#bannerLeft').html(languageData.bannerVerTwo);
    $('#bannerRight').html(languageData.bannerAboutEqd);
    $('#bannerTopLink').attr("href", languageData.bannerTopUrl);
    $('#bannerLeftLink').attr("href", languageData.bannerLeftUrl);
    $('#bannerRightLink').attr("href", languageData.bannerRightUrl);
    $('#verTwoText').html(languageData.versionTwoBody);
    $('.footerLogoEQD').attr("href", languageData.footerEQDUrl);

    if(localStorage.getItem('language') == 'jp') {
      $('.jp').addClass('languageActive');
      $('.en').removeClass('languageActive');
    } else {
      $('.en').addClass('languageActive');
      $('.jp').removeClass('languageActive');
    }
};
languageRequest.send();
};


function setLanguage(lang) {
localStorage.setItem('language', lang);
}


// ===== Right side sliding panel =====

$(document).ready( function() {
  getLanguage();
$('#sidepanelLogos').html("<a href='https://www.patternbased.com/' target='_blank'><img src='images/PatternBased_Logo_CL.png' class='sidepanelLogo'></a><a href='https://www.earthquakerdevices.com/' target='_blank'><img src='images/EarthQuaker-Devices-Logo_dark.png' class='sidepanelLogo'></a><p>© 2020 PatternBased and EarthQuaker Devices. All Rights Reserved.</p>");
});

$('.info').click(function () {
$('.rightSPWrapper, #rightSPHeader').css({
'right':'0', 
'transition-duration':'300ms'});
});
$('.close').click(function () { 
$('.rightSPWrapper, #rightSPHeader').css({
'right':'-480px', 
'transition-duration':'300ms'});
});

$(document).on('click', '#orlandoTrigger', function () {
  $('img#orlandBunny').addClass('bunnyShowup');
  if($('img#corabelleBunny').hasClass('bunnyShowup')) {
    $('#pyonpyonBubble').css({
      'display' : 'inline',
    });
    setTimeout( function() {
      $('#pyonpyonBubble').css({
        'opacity' : '1',
        'transition-delay' : '1000ms',
        'transition-duration' : '200ms'
      })   }, 100);
  }
});

  $(document).on('click', '#corabelleTrigger', function () {
    $('img#corabelleBunny').addClass('bunnyShowup');
    if($('img#orlandBunny').hasClass('bunnyShowup')) {
      $('#pyonpyonBubble').css({
        'display' : 'inline'
      });
      setTimeout( function() {
        $('#pyonpyonBubble').css({
          'opacity' : '1',
          'transition-delay' : '1000ms',
          'transition-duration' : '200ms'
        })   }, 100);
    }
  });


// ===== Link to Pedal with PedalID as URL Parameter =====

var pedalBtn = $('.slide, .pedalList, .morePedal');

$(pedalBtn).click(function() {
// if (($(window).width() < 960) || ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
// } else {
// var modalCache = localStorage.getItem('modal');
// localStorage.setItem('modal',modalCache);
// }
$('.loadingSpinner').css('display','inline-block');
$('#modalBG').css('display','block');

var thisPedal = event.currentTarget;
var pedalNumber = $(thisPedal).attr("data-pedal-id");

window.location.replace('pedal.html?pedalid=' + pedalNumber );
});

// ===== Hide the modal and show the page content =====

$('#showStarter').click(function() {
  $('.pedalPageWrap').css('display','block');
  $('#modalBG').css('display','none');
  localStorage.setItem("modal", "clicked");
});

// ===== Language Switch =====


$('.en').click(function(){
  $('.en').addClass('languageActive');
  $('.jp').removeClass('languageActive');
  localStorage.setItem('language', 'en');
  getLanguage();
});

$('.jp').click(function(){
  $('.jp').addClass('languageActive');
  $('.en').removeClass('languageActive');
  localStorage.setItem('language', 'jp');
  getLanguage();
});
