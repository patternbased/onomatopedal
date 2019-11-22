var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/arpanoid/q.mp3']}),
			color: '#FE4A49'},
		w: {
			sound: new Howl({
	  		src: ['sounds/arpanoid/w.mp3']}),
			color: '#F9F871'},
		e: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/e.mp3']}),
			color: '#3ABEFF'},
		r: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/r.mp3']}),
			color: '#B2FF9E'},
		
		a: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/a.mp3']}),
			color: '#F49F0A'},
		s: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/s.mp3']}),
			color: '#2DE1FC'},
		d: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/d.mp3']}),
			color: '#E688E8'},
		f: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/f.mp3']}),
			color: '#26FFE6'},
		
		z: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/z.mp3']}),
			color: '#F84AA7'},
		x: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/x.mp3']}),
			color: '#04E762'},
		c: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/c.mp3']}),
			color: '#5438DC'},
		v: {
			sound: new Howl({
	  			src: ['sounds/arpanoid/v.mp3']}),
			color: '#FED766'}
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
};

//	Animation for Key elements
	function onFrame(event) {
		for(var i = 0; i < circles.length; i++) {
			circles[i].fillColor.hue += 1;
			circles[i].scale(0.9);
			if(circles[i].area < 1) {
				circles[i].remove();
				circles.splice(i, 1);
			}
		};
  };
