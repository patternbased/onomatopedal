// Make the modal closable once the page is fully loaded
		window.onload = function() {
			$('.loadingSpinner, #modalBG').css('display','none');
		if ($(window).width() > 960) {
		  if (localStorage.getItem("modal") === null) {
		  	$('.modalContent, #modalBG').css('display','block');
		  } else {		  }		}
		};
        
// ===== Top page Pedal Shuffle =====
  if ($(window).width() < 960) {
    function randomize() {
      var allBanners = $('#pedalTable img');
      shuffle(allBanners.hide()).slice(11).show();    
    }
  } else {
    function randomize() {
      var allBanners = $('#pedalTable img');
      shuffle(allBanners.hide()).slice(12).show();    
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

// ===== Right side sliding panel =====

$(document).ready( function() {
  $('#aboutOP').html( "<h1>OnomatoPedal</h1><p><b>OnomatoPedal</b> is an audio playground and a series of downloadable sample packs and music tracks inspired by the Japanese Onomotopoetic words and the music effects pedals of the world famous EarthQuaker Devices.</p>" );
  $('#howToPlay').html("<h2>How To Play</h2><p>The <a href='ndex.html'>main screen</a> will display several EarthQuaker pedals. Click on 'Shuffle Pedals' to get a new set of choices. Once you see a pedal/onomotopeia that you would like to explore, click on it.</p><h3>On Desktop</h3><p>You will be able to play a set of sounds with the following 12 keys on your computer keyboard: <b>z, x, c, v, a, s, d, f, q, w, e, r.</b></p><img class='SPImages' src='images/keysOnBoard.svg'><h3>On Mobile</h3><p>Click to enter 'Play Mode', the track will start and you will see twelve drum pads. You can play along with the track or pause the track to just play the pads.</p><img class='SPImages' src='images/mobile-preview_V2@2x.png'>");
  $('#freeSamplePack').html("<h2>Free Sample Pack</h2><p>On the desktop version, you see an option to download the sample pack files. Each pedal also has a link to it's official page at the EarthQuaker website.</p><p><a rel='license/ href='http://creativecommons.org/licenses/by-sa/4.0/' target='_blank'><img alt='Creative Commons License' style='border-width:0' src='images/CC-BY-SA_icons.svg' height='40'/></a><br />Sample packs are licensed under a <a rel='license' href='http://creativecommons.org/licenses/by-sa/4.0/' target='_blank'>Creative Commons Attribution-ShareAlike 4.0 International License</a>.</p>");
  $('#credit').html("<p><b>Created</b> by <a href='https://www.patternbased.com/' target='_blank'>PatternBased</a></p><p><b>Music</b> by <a href='http://www.puffyshapes.com' target='_blank'>Puffy Shapes</a></p><p><b>Design and Code</b> by <a href='http://www.siorikitajima.com' target='_blank'>Siori Kitajima</a><br /><i><img src='images/github-icon.svg' width='20' height='20' style='margin-bottom: -4px;'> <a href='https://github.com/patternbased/eqd' target='_blank'>Fork this project on github</a></i></p><p><b>Music production/curation</b> by <a href='http://www.josephminadeo.com' target='_blank'>Joseph Minadeo</a></p><p><b>Music</b> by <a href='http://www.puffyshapes.com' target='_blank'>Puffy Shapes</a>, <a href='http://www.lowinthesky.com' target='_blank'>Low in the Sky</a>, <a href='https://www.instagram.com/takanocaca/' target='_blank'>Taka Tozawa</a>, Billy Dixon, Corey Farrow, Patrick McNulty</p><div class='sideBanner'><img src='images/OnomonoPedal_Cover_DP.jpg'><p><b>OnomotoPedal, The album</b> is available at the PatternBased Bandcamp.</p></div><p><b>Pedals</b> by <a href='https://www.earthquakerdevices.com/devices' target='_blank'>EarthQuaker Devices</a></p><p><b>Japanese Onomotope description</b> by <i>An Illustrated Dictionary of Japanese Onomatopoetic Expressions</i> by Taro Gomi, published by Kodansha Ltd,</p><p>Made with <b>amazing tools</b> including <a href='http://paperjs.org/' target='_blank'>Pepar.js</a>, <a href='https://howlerjs.com/' target='_blank'>Howler.js</a>, <a href='https://kenwheeler.github.io/slick/' target='_blank'>Slick.js</a>, </p>");
  $('#sidepanelLogos').html("<p>© 2019 PatternBased and EarthQuakerDevices. All Rights Reserved.</p><a href='https://www.patternbased.com/' target='_blank'><img src='images/PatternBased_Logo_CL.png' class='sidepanelLogo'></a><a href='https://www.earthquakerdevices.com/' target='_blank'><img src='images/EarthQuaker-Devices-Logo_dark.png' class='sidepanelLogo'></a>");
});

$('.info').click(function () {
  $('.rightSPWrapper').css({
    'right':'0', 
    'transition-duration':'300ms'});
});
$('.close').click(function () { 
  $('.rightSPWrapper').css({
    'right':'-480px', 
    'transition-duration':'300ms'});
});

// ===== Link to Pedal with PedalID as URL Parameter =====

var pedalBtn = $('.slide, .pedalList');

$(pedalBtn).click(function() {
//  var modalCache = localStorage.getItem('modal');
//  localStorage.clear();
//  localStorage.setItem('modal',modalCache);
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

// ===== When error, show alert to reload =====

window.onerror = function() {
  if(confirm('Oops. Something went wrong!')){
    window.location.reload();  
}
};