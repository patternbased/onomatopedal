var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/q.mp3']}),
			color: '#7A9E9F'},
		w: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/w.mp3']}),
			color: '#DDD8C4'},
		e: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/e.mp3']}),
			color: '#DFBE99'},
		r: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/r.mp3']}),
			color: '#A5907E'},
		
		a: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/a.mp3']}),
			color: '#ADB9E3'},
		s: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/s.mp3']}),
			color: '#BCA5AE'},
		d: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/d.mp3']}),
			color: '#dfc669'},
		f: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/f.mp3']}),
			color: '#D8A47F'},
		
		z: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/z.mp3']}),
			color: '#E4B1AB'},
		x: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/x.mp3']}),
			color: '#B5BD89'},
		c: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/c.mp3']}),
			color: '#F0C987'},
		v: {
			sound: new Howl({
	  		src: ['sounds/rainbowmachine/v.mp3']}),
			color: '#9AD5CA'}
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