var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/disastertransportsr/q.mp3']}),
			color: '#B98197'},
		w: {
			sound: new Howl({
	  		src: ['sounds/disastertransportsr/w.mp3']}),
			color: '#BCA5AE'},
		e: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/e.mp3']}),
			color: '#69A297'},
		r: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/r.mp3']}),
			color: '#838080'},
		
		a: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/a.mp3']}),
			color: '#69626D'},
		s: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/s.mp3']}),
			color: '#ADB9E3'},
		d: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/d.mp3']}),
			color: '#AA6DA3'},
		f: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/f.mp3']}),
			color: '#8797AF'},
		
		z: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/z.mp3']}),
			color: '#729EA1'},
		x: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/x.mp3']}),
			color: '#DDD8C4'},
		c: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/c.mp3']}),
			color: '#6E7DAB'},
		v: {
			sound: new Howl({
	  			src: ['sounds/disastertransportsr/v.mp3']}),
			color: '#9AD5CA'}
	};

	var circles = [];

	function onKeyDown(event) {
//		<!-- If truthy (if keyData exists do this else dont do anything) -->
		if(keyData[event.key]) {
			var maxPoint = new Point(view.size.width, view.size.height);
			//			<!-- Basically it is doing this: new Point(Math.random(), Math.random()) -->
			var randomPoint = Point.random();
			//			<!-- Pretty much doing Math.random() * maxPoint -->
			var point = maxPoint * randomPoint;
			var newCircle = new Path.Circle(point, 500);
			newCircle.fillColor = keyData[event.key].color;
			keyData[event.key].sound.play();
			circles.push(newCircle);
//			<!-- Cant do this because push() pushes in the string "orange" since it is the last time returned -->
//			<!-- circles.push(new Path.Circle(point, 500).fillColor = "orange"); -->
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
		for(var i = 0; i < circles.length; i++) {
			circles[i].fillColor.hue += 1;
			circles[i].scale(0.9);
			if(circles[i].area < 1) {
				circles[i].remove();
				circles.splice(i, 1);
			}
		}
  };
