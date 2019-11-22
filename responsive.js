
var eventFired = 0;

if ($(window).width() < 960) {

// Top page mobile

  $('#pedalTable').css({
    'max-width':'839px',
    'width':'100%',
    'margin-top':'50px'
  });
  $('#randomDiv').css({
    'margin':'50px 0',
    'animation': 'colorShuffler 6s linear infinite',
    'cursor':'pointer'
  });
  $('.pedalList').css({
    'width':'220px',
    'max-width':'30%',
    'padding':'30px'
  });


// Pedal page mobile

$('#carouselWindow').css({
  'width':'100vw'  
  });
$('#carousel').css({
  'width':'100vw',
  'margin':'0' 
  });
$('#actions').css({
  'height':'140px'
});  
$('#aboutPedal').css({
  'width': '220px',
  'float':'none'  
  });     
$('#aboutPedal > span').css({
  'display':'inline-block'  
  });
$('#listenBeat, #download, #fullscreenMode, .arrows').css({
    'display':'none'  
  });
$('li#playMode').css({
  'display':'block'
  });
$('#OnomoPedalHeader').css({
    'font-size':'18px'
    });

    // Global elements

$('footer').css({
  'margin-top':'50px'  
});
$('.footerLogo').css({
  'margin':'10px'  
});
$('.wrap').css({
  'min-height':'calc(100vh - 150px)'  
});
} else {
    eventFired = 1;}


$(window).on('resize', function() {
    if ($(window).width() < 960) {

    // Top page mobile

      $('#pedalTable').css({
        'max-width':'839px',
        'width':'100%',
        'margin-top':'50px'
      });
      $('#randomDiv').css({
        'margin':'50px 0'
      });
      $('.pedalList').css({
        'width':'220px',
        'max-width':'30%',
        'padding':'30px'
      });
    
        // Pedal page mobile

        $('#carouselWindow').css({
          'width':'100vw'  
          });
        $('#carousel').css({
          'width':'100vw',
          'margin':'0'
          });
        $('#actions').css({
          'height':'140px'
        });  
        $('#aboutPedal').css({
          'width': '220px',
          'float':'none'  
          });     
        $('#aboutPedal > span').css({
          'display':'inline-block'  
          });
        $('#listenBeat, #download, #fullscreenMode, .arrows').css({
            'display':'none'  
          });
        $('li#playMode').css({
          'display':'block'
          });
        $('#OnomoPedalHeader').css({
            'font-size':'18px'
            });

        // Global elements

      $('footer').css({
        'margin-top':'50px'  
      });
      $('.footerLogo').css({
        'margin':'10px'  
      });
      $('.wrap').css({
        'min-height':'calc(100vh - 150px)'  
      });
  }
});

$(window).on('resize', function() {
if ($(window).width() > 960) {
  // Top page mobile

  $('#pedalTable').css({
    'max-width':'900px',
    'width':'90%',
    'margin-top':'10vh'
  });
  $('#randomDiv').css({
    'margin':'80px 0'
  }); 
  $('.pedalList').css({
    'width':'240px',
    'padding':'20px'
  });

// Pedal page mobile

$('#carouselWindow').css({
  'width':'80vw'  
  });
$('#carousel').css({
  'width':'calc(80vw - 100px)',
  'margin':'0 50px'
  });
  $('#actions').css({
    'height':'70px'
  });  
  $('#aboutPedal').css({
    'width': '50px',
    'background': '#FFFFFF',
    'float':'left'  
    });     
  $('#aboutPedal > span').css({
    'display':'none'  
    });
  $('#listenBeat, #download, #fullscreenMode').css({
      'display':'block'  
      });
  $('#listenBeat').removeClass('fullScreenMode');
  $('.next, .prev').css({
    'display':'static'
  });
  $('li#playMode').css({
    'display':'none'
    });
  $('#OnomoPedalHeader').css({
      'font-size':'24px'
      });

  // Global elements

$('footer').css({
  'margin-top':'auto'  
});
$('.footerLogo').css({
  'margin':'30px'  
});
$('.wrap').css({
  'min-height':'calc(100vh - 100px)'  
});
} 
});

if ($(window).height() < 960) {
  $('footer').css({
    'position':'unset'
  });
}

