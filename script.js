// ===== Top page Pedal Shuffle =====

  if ($(window).width() < 960) {
    function randomize() {
      var allBanners = $('#pedalTable img');
      shuffle(allBanners.hide()).slice(9).show();    
    }
  } else {
    function randomize() {
      var allBanners = $('#pedalTable img');
      shuffle(allBanners.hide()).slice(10).show();    
    }
  };

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

// ===== Link to Pedal with PedalID as URL Parameter =====

var pedalBtn = $('.slide, .pedalList');

$(pedalBtn).click(function() {
  var modalCache = localStorage.getItem('modal');
  localStorage.clear();
  localStorage.setItem('modal',modalCache);
  $('.loadingSpinner').css('display','inline-block');
  $('#modalBG').css('display','block');


  var thisPedal = event.currentTarget;
    // Get id#
    var pedalNumber = $(thisPedal).attr("id");
    // Open Pedal with it as a URL Parameter
    window.location.replace('pedal.html?pedalid=' + pedalNumber );
});

// ===== Hide the modal and show the page content =====

$('#showStarter').click(function() {
  $('.pedalPageWrap').css('display','block');
  $('#modalBG').css('display','none');
  localStorage.setItem("modal", "clicked");
})

