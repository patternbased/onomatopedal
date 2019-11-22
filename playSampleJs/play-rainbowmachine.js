var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/q.mp3']}),
			color: '#CB3180'},
		w: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/w.mp3']}),
			color: '#FF8A6F'},
		e: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/e.mp3']}),
			color: '#FF346D'},
		r: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/r.mp3']}),
			color: '#EE92C2'},
		
		a: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/a.mp3']}),
			color: '#4DCCBD'},
		s: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/s.mp3']}),
			color: '#FFAF5E'},
		d: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/d.mp3']}),
			color: '#4B77DE'},
		f: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/f.mp3']}),
			color: '#E688E8'},
		
		z: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/z.mp3']}),
			color: '#C9F180'},
		x: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/x.mp3']}),
			color: '#F84AA7'},
		c: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/c.mp3']}),
			color: '#FFA5AB'},
		v: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/v.mp3']}),
			color: '#11B5E4'}
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
