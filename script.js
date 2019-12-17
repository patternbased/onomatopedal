// Make the modal closable once the page is fully loaded
window.onload = function() {
  $('.loadingSpinner, #modalBG').css('display','none');

  if (( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
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
if ($(window).width() < 960) {
function randomize() {
  var allBanners = $('#pedalTable img');
  shuffle(allBanners.hide()).slice(12).show();    
}
} else {
function randomize() {
  var allBanners = $('#pedalTable img');
  shuffle(allBanners.hide()).slice(13).show();    
}
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
    $('#modalMessage').html(languageData.modalMessage);
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
$('#credit').html("<p><b>Created</b> by <a href='https://www.patternbased.com/' target='_blank'>PatternBased</a></p><p><p><b>Design and Code</b> by <a href='http://www.siorikitajima.com' target='_blank'>Siori Kitajima</a><br /><i><img src='images/github-icon.svg' width='20' height='20' style='margin-bottom: -4px;'> <a href='https://github.com/patternbased/eqd' target='_blank'>Fork this project on github</a></i></p><p><b>Music production/curation</b> by <a href='http://www.josephminadeo.com' target='_blank'>Joseph Minadeo</a></p><p><b>Music</b> by <a href='http://www.puffyshapes.com' target='_blank'>Puffy Shapes</a>, <a href='http://www.lowinthesky.com' target='_blank'>Low in the Sky</a>, <a href='https://www.instagram.com/takanocaca/' target='_blank'>Taka Tozawa</a>, Billy Dixon, Corey Farrow, Patrick McNulty</p><p><b>Recorded and produced</b> in Tokyo, Kyoto, San Francisco, Los Angeles, Akron and Morongo Valley<br /><div class='sideBanner'><img src='images/OnomonoPedal_Cover_DP.jpg'><p><b>OnomatoPedal, The album</b> is available at the PatternBased Bandcamp.</p></div><p><b>Pedal circuits</b> by Jamie Stillman</p><p><b>Pedal graphics</b> by <a href='https://www.instagram.com/horakmatt/' target='_blank'>Matt Horak</a> and Jamie Stillman</p><p><b>Japanese Onomatope description</b> by <i>An Illustrated Dictionary of Japanese Onomatopoetic Expressions</i> by Taro Gomi, published by Kodansha Ltd,</p><p>Made with <b>amazing tools</b> including <a href='http://paperjs.org/' target='_blank'>Paper.js</a>, <a href='https://howlerjs.com/' target='_blank'>Howler.js</a>, <a href='https://kenwheeler.github.io/slick/' target='_blank'>Slick.js</a>, <a href='https://code.visualstudio.com/' target='_blank'>Visual Studio Code</a>, <a href='https://github.com/' target='_blank'>Github</a>, <a href='https://vcvrack.com/' target='_blank'>VCV Rack</a>, <a href='https://www.bfxr.net/' target='_blank'>Bfxr</a>, <a href='https://www.native-instruments.com/en/products/komplete/drums/polyplex/' target='_blank'>NI Polyplex</a>, <a href='https://www.ableton.com/en/' target='_blank'>Ableton</a>, <a href='https://teenage.engineering/products/op-1' target='_blank'>OP-1</a> and <a href='https://warmplace.ru/soft/fbits/' target='_blank'>Fractal Bits</a> </p><p><b>Thank you</b> Julie Robbins, Jamie Stillman, Karl Vorndran, Ben Vehorn, everyone at EarthQuaker Devices, Yugo Kitajima, Laura Apetroaei, <span id='corabelleTrigger'>Corabelle</span> and <span id='orlandoTrigger'>Orlando.</span></p>");

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
      'opacity' : '1',
      'transition-delay' : '1000ms',
      'transition-duration' : '200ms'
    });
  }
});

  $(document).on('click', '#corabelleTrigger', function () {
    $('img#corabelleBunny').addClass('bunnyShowup');
    if($('img#orlandBunny').hasClass('bunnyShowup')) {
      $('#pyonpyonBubble').css({
        'opacity' : '1',
        'transition-delay' : '1000ms',
        'transition-duration' : '200ms'
      });
    }
  });


// ===== Link to Pedal with PedalID as URL Parameter =====

var pedalBtn = $('.slide, .pedalList');

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