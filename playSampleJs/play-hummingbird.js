var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold/bubbles.mp3']}),
			color: '#C9F180'},
		w: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold/clay.mp3']}),
			color: '#76B041'},
		e: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/confetti.mp3']}),
			color: '#00736B'},
		r: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/corona.mp3']}),
			color: '#B5BD89'},
		
		a: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/pinwheel.mp3']}),
			color: '#F9F871'},
		s: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/piston-1.mp3']}),
			color: '#80DED9'},
		d: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/piston-2.mp3']}),
			color: '#7CDAA2'},
		f: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/prism-1.mp3']}),
			color: '#2394a0'},
		
		z: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/01KickZ.mp3']}),
			color: '#60D394'},
		x: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/02SnareX.mp3']}),
			color: '#007CA3'},
		c: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/ufo.mp3']}),
			color: '#AAF683'},
		v: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/veil.mp3']}),
			color: '#4AAD52'}
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
