var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/q.mp3']}),
			color: '#BE3E82'},
		w: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/w.mp3']}),
			color: '#036c9b'},
		e: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/e.mp3']}),
			color: '#e87e57'},
		r: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/r.mp3']}),
			color: '#973E76'},
		
		a: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/a.mp3']}),
			color: '#B566CC'},
		s: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/s.mp3']}),
			color: '#CC444B'},
		d: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/d.mp3']}),
			color: '#B2675E'},
		f: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/f.mp3']}),
			color: '#DF7373'},
		
		z: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/z.mp3']}),
			color: '#820263'},
		x: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/x.mp3']}),
			color: '#E58F65'},
		c: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/c.mp3']}),
			color: '#D1462F'},
		v: {
			sound: new Howl({
	  		src: ['sounds/dreamcrusher/v.mp3']}),
			color: '#CA1551'}
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
