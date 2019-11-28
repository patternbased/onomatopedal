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
  pedalRequest.open('GET','pedal-paperinfo.json', true);
  pedalRequest.onload = function() {
  var pedalData = JSON.parse(pedalRequest.responseText);
// Rendering the page with PedalID
  
    var pedalImgString = pedalData[pedalNumber].nameid;
    var sampleUrlQ = pedalData[pedalNumber].sampleQ;
    
  
    // ===== Paperscript =====

  var keyData = {
    q: {
        sound: new Howl({
          src: [sampleUrlQ]}),
        color: '#A57F60'},
    w: {
        sound: new Howl({
          src: ['sounds/' + pedalImgString + '/w.mp3']}),
        color: '#F9F871'},
    e: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/e.mp3']}),
        color: '#E8AE68'},
    r: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/r.mp3']}),
        color: '#FFD45C'},
    
    a: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/a.mp3']}),
        color: '#9c8035'},
    s: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/s.mp3']}),
        color: '#E4B1AB'},
    d: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/d.mp3']}),
        color: '#FFD97D'},
    f: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/f.mp3']}),
        color: '#B5BD89'},
    
    z: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/z.mp3']}),
        color: '#C89933'},
    x: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/x.mp3']}),
        color: '#DFBE99'},
    c: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/c.mp3']}),
        color: '#757761'},
    v: {
        sound: new Howl({
              src: ['sounds/' + pedalImgString + '/v.mp3']}),
        color: '#F3C178'}
};

var circles = [];

function onKeyDown(event) {
    //		<!-- If truthy (if keyData exists do this else dont do anything) -->
            if (keyData[event.key]) {
                var maxPoint = new Point(view.size.width, view.size.height);
                var randomPoint = Point.random();
                var point = maxPoint * randomPoint;
                var newCircle = new Path.Circle(point, 500);
                newCircle.fillColor = keyData[event.key].color;
                keyData[event.key].sound.play();
                circles.push(newCircle);
            }
        };
    
    //==== Mobile tapKey elements to play beats === 
    
    function squareClickEvent(key) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500);
        newCircle.fillColor = keyData[key].color;
        keyData[key].sound.play();
        circles.push(newCircle);
    };
    
    var squareIDs = [	"keyQ", "keyW", "keyE", "keyR", "keyA", "keyS", "keyD", "keyF", "keyZ", "keyX", "keyC", "keyV"];
    var squareToKey = [	"q", "w", "e", "r", "a", "s", "d", "f", "z", "x", "c", "v"];
    var keyLength = squareToKey.length;
    
    for (i = 0; i < keyLength; i++) {
        document.getElementById(squareIDs[i]).onclick =  
        squareClickEvent.bind(this, squareToKey[i]);
    }
    
    //	Animation for Key elements
        function onFrame(event) {
            for (var x = 0; x < circles.length; x++) {
                circles[x].fillColor.hue += 1;
                circles[x].scale(0.9);
                if (circles[x].area < 1) {
                    circles[x].remove();
                    circles.splice(x, 1);
                }
            }
      };

  };
  pedalRequest.send();