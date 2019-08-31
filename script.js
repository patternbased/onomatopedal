// Right side panel
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

// Pedal page Action buttons
$('.actionBtn').hover(function () { 
  $(this).css({ 
    'width': '220px',
    'background': '#dfc669',
    'transition-duration':'100ms'
  }),
  $('span', this).css('display','inline')
}, function() {
  $('span', this).css('display','none'),
  $(this).css({
    'width': '50px',
    'background': '#ffffff',
    'transition-duration':'50ms'
  })
});

$('#fullscreenMode').click(function () { 
  $('#pedal').fadeOut(500);
  $('footer').css({
    'position': 'fixed',
  });
  $('#showAll').css({
    'visibility': 'visible'
  });
});

$('#showAll').hover(function () {
  $(this).css({
    'width': '220px',
    'background': '#dfc669',
    'transition-duration':'100ms'
  }),
  $('span', this).css('display','inline')
  }, function () {
    $('span', this).css('display','none')
    $(this).css({
      'width': '50px',
      'background': '#ffffff',
      'transition-duration':'50ms'
    });
  }
);

$('#showAll').click(function () { 
  $('#pedal').fadeIn(300);
  $('footer').css({
    'position': 'static',
  });
  $('#showAll').css({
    'visibility': 'hidden'});
  });