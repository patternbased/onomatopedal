var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/hummingbird/q.mp3']}),
			color: '#C9F180'},
		w: {
			sound: new Howl({
	  		src: ['sounds/hummingbird/w.mp3']}),
			color: '#76B041'},
		e: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/e.mp3']}),
			color: '#00736B'},
		r: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/r.mp3']}),
			color: '#B5BD89'},
		
		a: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/a.mp3']}),
			color: '#F9F871'},
		s: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/s.mp3']}),
			color: '#80DED9'},
		d: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/d.mp3']}),
			color: '#7CDAA2'},
		f: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/f.mp3']}),
			color: '#2394a0'},
		
		z: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/z.mp3']}),
			color: '#60D394'},
		x: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/x.mp3']}),
			color: '#007CA3'},
		c: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/c.mp3']}),
			color: '#AAF683'},
		v: {
			sound: new Howl({
	  			src: ['sounds/hummingbird/v.mp3']}),
			color: '#4AAD52'}
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