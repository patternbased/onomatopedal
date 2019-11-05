
var eventFired = 0;

if ($(window).width() < 960) {

// Top page mobile

$('#randomDivMobile').css({
  'display':'inline-block'
  });
  $('#pedalTable').css({
    'max-width':'839px',
    'width':'100%'
  });
  $('#randomDiv').css({
    'display':'none'
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
  'width':'calc(100vw - 100px)'  
  });
$('#actions').css({
  'height':'140px'
});  
$('#listenBeat, #aboutPedal').css({
  'width': '220px',
  'float':'none'  
  });     
$('#listenBeat > span, #aboutPedal > span').css({
  'display':'inline-block'  
  });
$('#listenBeat > span').html('Play Mode'  
  );   
$('#download, #fullscreenMode').css({
    'display':'none'  
    });
$('#listenBeat').addClass('fullScreenMode');
$('.arrows').css({
    'display':'none'
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
    eventFired = 1;};


$(window).on('resize', function() {
    if ($(window).width() < 960) {
      $('#randomDivMobile').css({
        'display':'inline-block'
        });
        $('#pedalTable').css({
          'max-width':'839px',
          'width':'100%'
        });
        $('#randomDiv').css({
          'display':'none'
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
        'width':'calc(100vw - 100px)'  
        });
        $('#actions').css({
          'height':'140px'
        });  
        $('#listenBeat, #aboutPedal').css({
          'width': '220px',
          'background': '#dfc669',
          'float':'none'  
          });     
        $('#listenBeat > span, #aboutPedal > span').css({
          'display':'inline-block'  
          });
        $('#listenBeat > span').html('Play Mode'  
          );   
        $('#download, #fullscreenMode').css({
            'display':'none'  
            });
        $('#listenBeat').addClass('fullScreenMode');
        $('.arrows').css({
          'display':'none'
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
  $('#randomDivMobile').css({
    'display':'none'
  });
  $('#pedalTable').css({
    'max-width':'900px',
    'width':'90%'
  });
  $('#randomDiv').css({
    'display':'block'
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
  'width':'calc(80vw - 100px)'  
  });
  $('#actions').css({
    'height':'70px'
  });  
  $('#listenBeat, #aboutPedal').css({
    'width': '50px',
    'background': '#FFFFFF',
    'float':'left'  
    });     
  $('#listenBeat > span, #aboutPedal > span').css({
    'display':'none'  
    });
  $('#listenBeat > span').html('Listen to Beat'  
    );   
  $('#download, #fullscreenMode').css({
      'display':'block'  
      });
  $('#listenBeat').removeClass('fullScreenMode');
  $('.next, .prev').css({
    'display':'static'
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
