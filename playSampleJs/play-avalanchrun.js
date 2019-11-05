var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold/bubbles.mp3']}),
			color: '#00BFB2'},
		w: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold/clay.mp3']}),
			color: '#3194C6'},
		e: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/confetti.mp3']}),
			color: '#80DED9'},
		r: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/corona.mp3']}),
			color: '#5E7BBD'},
		
		a: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/pinwheel.mp3']}),
			color: '#5ADBFF'},
		s: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/piston-1.mp3']}),
			color: '#2EA9C0'},
		d: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/piston-2.mp3']}),
			color: '#1481BA'},
		f: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/prism-1.mp3']}),
			color: '#65CBAE'},
		
		z: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/01KickZ.mp3']}),
			color: '#247BA0'},
		x: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/02SnareX.mp3']}),
			color: '#53599A'},
		c: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/ufo.mp3']}),
			color: '#3ABEFF'},
		v: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/veil.mp3']}),
			color: '#4DCCBD'}
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
