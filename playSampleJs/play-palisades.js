var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/palisades/q.mp3']}),
			color: '#3f3f3f'},
		w: {
			sound: new Howl({
	  		src: ['sounds/palisades/w.mp3']}),
			color: '#AA6DA3'},
		e: {
			sound: new Howl({
	  		src: ['sounds/palisades/e.mp3']}),
			color: '#7A9E9F'},
		r: {
			sound: new Howl({
	  		src: ['sounds/palisades/r.mp3']}),
			color: '#CB3180'},
		
		a: {
			sound: new Howl({
	  		src: ['sounds/palisades/a.mp3']}),
			color: '#a3a3a5'},
		s: {
			sound: new Howl({
	  		src: ['sounds/palisades/s.mp3']}),
			color: '#A13D63'},
		d: {
			sound: new Howl({
	  		src: ['sounds/palisades/d.mp3']}),
			color: '#776472'},
		f: {
			sound: new Howl({
	  		src: ['sounds/palisades/f.mp3']}),
			color: '#3C153B'},
		
		z: {
			sound: new Howl({
	  		src: ['sounds/palisades/z.mp3']}),
			color: '#D8A47F'},
		x: {
			sound: new Howl({
	  		src: ['sounds/palisades/x.mp3']}),
			color: '#838080'},
		c: {
			sound: new Howl({
	  		src: ['sounds/palisades/c.mp3']}),
			color: '#2F3061'},
		v: {
			sound: new Howl({
	  		src: ['sounds/palisades/v.mp3']}),
			color: '#973E76'}
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