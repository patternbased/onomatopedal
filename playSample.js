var keyData = {
	q: {
		sound: new Howl({
			src: ['sounds/acapulcogold/bubbles.mp3']}),
		color: '#A57F60'},
	w: {
		sound: new Howl({
			src: ['sounds/acapulcogold/clay.mp3']}),
		color: '#F9F871'},
	e: {
		sound: new Howl({
				src: ['sounds/acapulcogold/confetti.mp3']}),
		color: '#E8AE68'},
	r: {
		sound: new Howl({
				src: ['sounds/acapulcogold/corona.mp3']}),
		color: '#FFD45C'},
	
	a: {
		sound: new Howl({
				src: ['sounds/acapulcogold/pinwheel.mp3']}),
		color: '#9c8035'},
	s: {
		sound: new Howl({
				src: ['sounds/acapulcogold/piston-1.mp3']}),
		color: '#E4B1AB'},
	d: {
		sound: new Howl({
				src: ['sounds/acapulcogold/piston-2.mp3']}),
		color: '#FFD97D'},
	f: {
		sound: new Howl({
				src: ['sounds/acapulcogold/prism-1.mp3']}),
		color: '#B5BD89'},
	
	z: {
		sound: new Howl({
				src: ['sounds/acapulcogold/01KickZ.mp3']}),
		color: '#C89933'},
	x: {
		sound: new Howl({
				src: ['sounds/acapulcogold/02SnareX.mp3']}),
		color: '#DFBE99'},
	c: {
		sound: new Howl({
				src: ['sounds/acapulcogold/ufo.mp3']}),
		color: '#757761'},
	v: {
		sound: new Howl({
				src: ['sounds/acapulcogold/veil.mp3']}),
		color: '#F3C178'}
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
	};
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
