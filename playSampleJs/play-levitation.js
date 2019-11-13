var keyData = {
		q: {
			sound: new Howl({
				src: ['sounds/levitation/q.mp3']}),
			color: '#EB9486'},
		w: {
			sound: new Howl({
				src: ['sounds/levitation/w.mp3']}),
			color: '#3f3f3f'},
		e: {
			sound: new Howl({
				src: ['sounds/levitation/e.mp3']}),
			color: '#F0C987'},
		r: {
			sound: new Howl({
				src: ['sounds/levitation/r.mp3']}),
			color: '#a3a3a5'},
		
		a: {
			sound: new Howl({
				src: ['sounds/levitation/a.mp3']}),
			color: '#8B1E3F'},
		s: {
			sound: new Howl({
				src: ['sounds/levitation/s.mp3']}),
			color: '#A5907E'},
		d: {
			sound: new Howl({
				src: ['sounds/levitation/d.mp3']}),
			color: '#d1d0d5'},
		f: {
			sound: new Howl({
				src: ['sounds/levitation/f.mp3']}),
			color: '#92817A'},
		
		z: {
			sound: new Howl({
				src: ['sounds/levitation/z.mp3']}),
			color: '#5B5941'},
		x: {
			sound: new Howl({
				src: ['sounds/levitation/x.mp3']}),
			color: '#786452'},
		c: {
			sound: new Howl({
				src: ['sounds/levitation/c.mp3']}),
			color: '#776472'},
		v: {
			sound: new Howl({
				src: ['sounds/levitation/v.mp3']}),
			color: '#DB4C40'}
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
		};
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
			};
		};
  };
