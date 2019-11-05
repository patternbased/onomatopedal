var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold/bubbles.mp3']}),
			color: '#FF6A86'},
		w: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold/clay.mp3']}),
			color: '#54C6EB'},
		e: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/confetti.mp3']}),
			color: '#B2FF9E'},
		r: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/corona.mp3']}),
			color: '#FFD45C'},
		
		a: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/pinwheel.mp3']}),
			color: '#FF346D'},
		s: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/piston-1.mp3']}),
			color: '#9DE6FF'},
		d: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/piston-2.mp3']}),
			color: '#FFAF5E'},
		f: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/prism-1.mp3']}),
			color: '#4DCCBD'},
		
		z: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/01KickZ.mp3']}),
			color: '#CCFF66'},
		x: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/02SnareX.mp3']}),
			color: '#FF8A6F'},
		c: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/ufo.mp3']}),
			color: '#26FFE6'},
		v: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold/veil.mp3']}),
			color: '#EE92C2'}
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
