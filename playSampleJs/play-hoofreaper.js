var keyData = {
		q: {
			sound: new Howl({
				src: ['sounds/hoofreaper/q.mp3']}),
				color: '#FFAF5E'},
		w: {
			sound: new Howl({
				src: ['sounds/hoofreaper/w.mp3']}),
				color: '#A57F60'},
		e: {
			sound: new Howl({
				src: ['sounds/hoofreaper/e.mp3']}),
				color: '#2F3061'},
		r: {
			sound: new Howl({
				src: ['sounds/hoofreaper/r.mp3']}),
				color: '#76B041'},
		
		a: {
			sound: new Howl({
				src: ['sounds/hoofreaper/a.mp3']}),
				color: '#92817A'},
		s: {
			sound: new Howl({
	  			src: ['sounds/hoofreaper/s.mp3']}),
			color: '#65CBAE'},
		d: {
			sound: new Howl({
				src: ['sounds/hoofreaper/d.mp3']}),
				color: '#e87e57'},
		f: {
			sound: new Howl({
				src: ['sounds/hoofreaper/f.mp3']}),
				color: '#5B5941'},
		
		z: {
			sound: new Howl({
				src: ['sounds/hoofreaper/z.mp3']}),
				color: '#D8A47F'},
		x: {
			sound: new Howl({
				src: ['sounds/hoofreaper/x.mp3']}),
				color: '#550C18'},
		c: {
			sound: new Howl({
				src: ['sounds/hoofreaper/c.mp3']}),
				color: '#786452'},
		v: {
			sound: new Howl({
				src: ['sounds/hoofreaper/v.mp3']}),
				color: '#2EA9C0'}
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
