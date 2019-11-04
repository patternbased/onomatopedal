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

// ===== AJAX =====
var pedalBtn = $('.slide, .pedalList');

$(pedalBtn).click(function() {
  // Connect to JSON
  var pedalRequest = new XMLHttpRequest();
  var thisPedal = this;
  pedalRequest.open('GET','pedalinfo.json');
  pedalRequest.onload = function() {
    var pedalData = JSON.parse(pedalRequest.responseText);
  
    // Get id#

    var pedalNumber = $(thisPedal).attr("id");

    // Content Distinations
    var pedalName = $('#pedalName');
    var pedalImg = $('#thePedal');
    var pedalDesc = $('#onomoInfo');
    var onomoColor = $('p#onomoInfo');
    var onomoHeader = $('#onomoTitle');

    // render HTML

    var pedalNameString = pedalData[pedalNumber].name;
    var pedalImgString = pedalData[pedalNumber].nameid;
    var pedalDescString = pedalData[pedalNumber].onomoDesc;
    var onomoColorString = pedalData[pedalNumber].hex;
    var onomoHeaderString = pedalData[pedalNumber].onomoid;

    $(pedalName).html(pedalNameString).css("color", onomoColorString);
    $(pedalImg).attr("src","images/pedalsOnly/" + pedalImgString + "@2x.png");
    $(pedalDesc).html(pedalDescString);
    $(onomoColor).find('span').css("color", onomoColorString);
    $(onomoHeader).attr("src","images/" + onomoHeaderString + "-title.svg")

  };
  pedalRequest.send();
});

