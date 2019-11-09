var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold/bubbles.mp3']}),
			color: '#BE3E82'},
		w: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold/clay.mp3']}),
			color: '#036c9b'},
		e: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/confetti.mp3']}),
			color: '#e87e57'},
		r: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/corona.mp3']}),
			color: '#973E76'},
		
		a: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/pinwheel.mp3']}),
			color: '#B566CC'},
		s: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/piston-1.mp3']}),
			color: '#CC444B'},
		d: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/piston-2.mp3']}),
			color: '#B2675E'},
		f: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/prism-1.mp3']}),
			color: '#DF7373'},
		
		z: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/01KickZ.mp3']}),
			color: '#820263'},
		x: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/02SnareX.mp3']}),
			color: '#E58F65'},
		c: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/ufo.mp3']}),
			color: '#D1462F'},
		v: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/veil.mp3']}),
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

//==== Mobile tapKey elements to play beats === START

var keyQtrigger = document.getElementById("keyQ");
keyQtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.q.color;
	keyData.q.sound.play();
	circles.push(newCircle);
};

var keyWtrigger = document.getElementById("keyW");
keyWtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.w.color;
	keyData.w.sound.play();
	circles.push(newCircle);
};

var keyEtrigger = document.getElementById("keyE");
keyEtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.e.color;
	keyData.e.sound.play();
	circles.push(newCircle);
};

var keyRtrigger = document.getElementById("keyR");
keyRtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.r.color;
	keyData.r.sound.play();
	circles.push(newCircle);
};

var keyAtrigger = document.getElementById("keyA");
keyAtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.a.color;
	keyData.a.sound.play();
	circles.push(newCircle);
};

var keyStrigger = document.getElementById("keyS");
keyStrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.s.color;
	keyData.s.sound.play();
	circles.push(newCircle);
};

var keyDtrigger = document.getElementById("keyD");
keyDtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.d.color;
	keyData.d.sound.play();
	circles.push(newCircle);
};

var keyFtrigger = document.getElementById("keyF");
keyFtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.f.color;
	keyData.f.sound.play();
	circles.push(newCircle);
};

var keyZtrigger = document.getElementById("keyZ");
keyZtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.z.color;
	keyData.z.sound.play();
	circles.push(newCircle);
};

var keyXtrigger = document.getElementById("keyX");
keyXtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.x.color;
	keyData.x.sound.play();
	circles.push(newCircle);
};

var keyCtrigger = document.getElementById("keyC");
keyCtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.c.color;
	keyData.c.sound.play();
	circles.push(newCircle);
};

var keyVtrigger = document.getElementById("keyV");
keyVtrigger.onclick = function(){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500);
	newCircle.fillColor = keyData.v.color;
	keyData.v.sound.play();
	circles.push(newCircle);
};
//==== Mobile tapKey elements to play beats === END

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
