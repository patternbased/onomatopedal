var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold-q.mp3']}),
			color: '#A57F60'},
		w: {
			sound: new Howl({
	  		src: ['sounds/acapulcogold-w.mp3']}),
			color: '#F9F871'},
		e: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-e.mp3']}),
			color: '#E8AE68'},
		r: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-r.mp3']}),
			color: '#FFD45C'},
		
		a: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-a.mp3']}),
			color: '#9c8035'},
		s: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-s.mp3']}),
			color: '#E4B1AB'},
		d: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-d.mp3']}),
			color: '#FFD97D'},
		f: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-f.mp3']}),
			color: '#B5BD89'},
		
		z: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-z.mp3']}),
			color: '#C89933'},
		x: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-x.mp3']}),
			color: '#DFBE99'},
		c: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-c.mp3']}),
			color: '#757761'},
		v: {
			sound: new Howl({
	  			src: ['sounds/acapulcogold-v.mp3']}),
			color: '#F3C178'}
	};

	var circles = [];

	function onKeyDown(event) {
		//		<!-- If truthy (if keyData exists do this else dont do anything) -->
				if (keyData[event.key]) {
					var maxPoint = new Point(view.size.width, view.size.height);
					var randomPoint = Point.random();
					var point = maxPoint * randomPoint;
					var newCircle = new Path.Circle(point, 500);
					newCircle.fillColor = keyData[event.key].color;
					keyData[event.key].sound.play();
					circles.push(newCircle);
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
				for (var x = 0; x < circles.length; x++) {
					circles[x].fillColor.hue += 1;
					circles[x].scale(0.9);
					if (circles[x].area < 1) {
						circles[x].remove();
						circles.splice(x, 1);
					}
				}
		  };