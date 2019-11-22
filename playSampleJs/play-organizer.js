var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/organizer/q.mp3']}),
			color: '#AEECEF'},
		w: {
			sound: new Howl({
	  		src: ['sounds/organizer/w.mp3']}),
			color: '#007CA3'},
		e: {
			sound: new Howl({
	  		src: ['sounds/organizer/e.mp3']}),
			color: '#5DBAB2'},
		r: {
			sound: new Howl({
	  		src: ['sounds/organizer/r.mp3']}),
			color: '#9DE6FF'},
		
		a: {
			sound: new Howl({
	  		src: ['sounds/organizer/a.mp3']}),
			color: '#086375'},
		s: {
			sound: new Howl({
	  		src: ['sounds/organizer/s.mp3']}),
			color: '#7CDAA2'},
		d: {
			sound: new Howl({
	  		src: ['sounds/organizer/d.mp3']}),
			color: '#65CBAE'},
		f: {
			sound: new Howl({
	  		src: ['sounds/organizer/f.mp3']}),
			color: '#26FFE6'},
		
		z: {
			sound: new Howl({
	  		src: ['sounds/organizer/z.mp3']}),
			color: '#4DCCBD'},
		x: {
			sound: new Howl({
	  		src: ['sounds/organizer/x.mp3']}),
			color: '#2EA9C0'},
		c: {
			sound: new Howl({
	  		src: ['sounds/organizer/c.mp3']}),
			color: '#80DED9'},
		v: {
			sound: new Howl({
	  		src: ['sounds/organizer/v.mp3']}),
			color: '#49C6E5'}
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