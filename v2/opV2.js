console.clear();
var wW = window.innerWidth;
var wH = window.innerHeight;
// var elem = document.getElementById('draw-animation');
// var two = new Two({ width: wW, height: wH }).appendTo(elem);

// var bufferSamples = new Tone.Buffers({
//   "C2":"sounds/a.mp3", "C#2":"sounds/a.mp3", "D2":"sounds/a.mp3", "D#2":"sounds/a.mp3", "E2":"sounds/a.mp3", "F2":"sounds/a.mp3",
//   "F#2":"sounds/c.mp3", "G2":"sounds/c.mp3", "G#2":"sounds/c.mp3", "A2":"sounds/c.mp3", "A#2":"sounds/c.mp3", "B2":"sounds/c.mp3",
//   "C3":"sounds/d.mp3", "C#3":"sounds/d.mp3", "D3":"sounds/d.mp3", "D#3":"sounds/d.mp3", "E3":"sounds/d.mp3", "F3":"sounds/d.mp3",
//   "F#3":"sounds/z.mp3", "G3":"sounds/z.mp3", "G#3":"sounds/z.mp3", "A3":"sounds/z.mp3", "A#3":"sounds/z.mp3", "B3":"sounds/z.mp3",
//   "C4":"sounds/a.mp3", "C#4":"sounds/a.mp3", "D4":"sounds/a.mp3", "D#4":"sounds/a.mp3", "E4":"sounds/a.mp3", "F4":"sounds/a.mp3",
//   "F#4":"sounds/c.mp3", "G4":"sounds/c.mp3", "G#4":"sounds/c.mp3", "A4":"sounds/c.mp3", "A#4":"sounds/c.mp3", "B4":"sounds/c.mp3",
//   "C5":"sounds/d.mp3", "C#5":"sounds/d.mp3", "D5":"sounds/d.mp3", "D#5":"sounds/d.mp3", "E5":"sounds/d.mp3", "F5":"sounds/d.mp3",
//   "F#5":"sounds/z.mp3", "G5":"sounds/z.mp3", "G#5":"sounds/z.mp3", "A5":"sounds/z.mp3", "Backspace":"sounds/z.mp3", "B5":"sounds/z.mp3"
// });

// const sampler = new Tone.Sampler({
// 	urls: {
// 		"C4": "a.mp3",
// 		"G#3": "c.mp3",
// 		"E4": "d.mp3",
// 		"F#3": "z.mp3",}
// }).toDestination();
var sampler = new Tone.Sampler({
		"C4": "sounds/a.mp3",
		"G#3": "sounds/c.mp3",
		"E4": "sounds/d.mp3",
		"F#3": "sounds/z.mp3"
}, {
	'release' : 1,
	'onload' : function(){
		console.log('ready');
	}
}).toDestination();

var keyToPitch = { 
  " ":" ",
  "1":"C2", "2":"C#2", "3":"D2", "4":"D#2", "5":"E2", "6":"F2",
  "7":"F#2", "8":"G2", "9":"G#2", "0":"A2", "-":"A#2", "=":"B2",
  "q":"C3", "w":"C#3", "e":"D3", "r":"D#3", "t":"E3", "y":"F3",
  "u":"F#3", "i":"G3", "o":"G#3", "p":"A3", "[":"A#3", "]":"B3",
  "a":"C4", "s":"C#4", "d":"D4", "f":"D#4", "g":"E4", "h":"F4",
  "j":"F#4", "k":"G4", "l":"G#4", ";":"A4", "'":"A#4", "\\":"B4",
  "z":"C5", "x":"C#5", "c":"D5", "v":"D#5", "b":"E5", "n":"F5",
  "m":"F#5", ",":"G5", ".":"G#5", "/":"A5", "Backspace":"A#5", "`":"B5"
   }

var keyToColor = { " ":" ", "z":"#E75A7C", "s":"#7681B3", "x":"#558B6E", "d":"#F1DABF", "c":"#FBB02D", "f":"#E75A7C", "v":"#7681B3", "g":"#558B6E", "b":"#F1DABF", "h":"#FBB02D", "n":"#E75A7C", "j":"#7681B3", "m":"#558B6E", "k":"#F1DABF", ",":"#FBB02D", "l":"#E75A7C", ".":"#7681B3", "/":"#558B6E", "'":"#F1DABF", "q":"#FBB02D", "a":"#E75A7C", "2":"#7681B3",  "1":"#558B6E", "4":"#F1DABF", "w":"#FBB02D", "3":"#E75A7C", "e":"#7681B3", "r":"#558B6E", "5":"#F1DABF", "t":"#FBB02D", "6":"#E75A7C", "y":"#7681B3", "7":"#558B6E", "u":"#F1DABF", "8":"#FBB02D", "i":"#E75A7C", "9":"#7681B3", "o":"#558B6E", "0":"#F1DABF", "p":"#FBB02D", "[":"#E75A7C", "-":"#7681B3","=":"#558B6E", "]":"#F1DABF", "Backspace":"#FBB02D", "\\":"#E75A7C" }

    window.addEventListener('keydown', this.onkeydown);
    window.addEventListener('keyup', this.onkeyup);

    function onkeydown(e){
      // sampler.triggerAttackRelease(keyToPitch[e.key], Tone.context.currentTime);
      sampler.triggerAttack(keyToPitch[e.key]);
      // const player = new Tone.Player().toDestination();
      // player.buffer = bufferSamples.get(keyToPitch[e.key]);
      // player.start();
      // twoAnimation(keyToColor[e.key]);
    }
    function onkeyup(e){
      sampler.triggerRelease(keyToPitch[e.key]);
    }

  //   document.querySelectorAll('.pad').forEach(item => {
  //     item.addEventListener('click', event => {
  //     var p = item.getAttribute('id').toString();
  //     console.log(p);
  //     sampler.triggerAttackRelease(keyToPitch[p], Tone.context.currentTime);
  //     // const player = new Tone.Player().toDestination();
  //     // player.buffer = bufferSamples.get(keyToPitch[p]);
  //     // player.start();
  //     // twoAnimation(keyToColor[p]);
  //   })
  // })

  document.querySelectorAll('.pad').forEach(item => {
    item.addEventListener('mousedown', event => {
    var p = item.getAttribute('id').toString();
    console.log(p);
    item.style.color = '#f27b47';
    sampler.triggerAttack(keyToPitch[p]);
  });
  item.addEventListener('mouseup', event => {
    var p = item.getAttribute('id').toString();
    item.style.color = '#FFFFFF';
    sampler.triggerRelease(keyToPitch[p]);
  });
})

// function twoAnimation(col) {
//     var circle = two.makeCircle(-50, -50, 50);
//     var rect = two.makeRoundedRectangle(70, -50, 100, 100, 10);
//     var star = two.makeStar(70, 70, 100, 50, 8);
//     var polygon = two.makePolygon(-50, 70, 50, 7);

//     var group = two.makeGroup(circle, rect, polygon, star);
//     group.translation.set(two.width / 2, two.height / 2);
//     group.fill = col;
//     group.scale = 0;
//     group.opacity = 1;
//     group.noStroke();

//     //bind is like an emvelop of animation
//     two.bind('update', function(frameCount) {
//       if (group.scale > 0.9999) {
//         group.remove();
//       }
//       var t = (1 - group.scale) * 0.05;
//       group.scale += t;
//       group.rotation += t * 4 * Math.PI;
//       group.opacity -= t/1.1;
//       group.x += 10;
//     }).play();
// }

var r = 90, g = 80, b = 80;
var colNum = 1;
var rSw = true, gSw = true, bSw = true;

class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 2;
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-0.7,0.8);
  }
  createParticle() {
    noStroke();
    noFill();
    circle(this.x,this.y,this.r);
  }
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<150) {
        stroke('rgb(' + r + ',' + g + ',' + b + ')');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}
class WideBar {
  constructor(y,r,b,g) {
    this.x = 0;
    this.y = y;
    this.w = width;
    this.h = height/4;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = 40;
  }
  createWideBar() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
  }
  goDown(arrayName) {
    this.y+=this.speed;
    if(this.y > height) arrayName.splice(0, 1);
  }
  goUp(arrayName) {
    this.y-=this.speed;
    if(this.y < 0) arrayName.splice(0, 1);
  }
}

let particles = [];
let wideBars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('rgb(10,10,10)');
  frameRate(24);
  for(let i = 0;i<width/20;i++){
    particles.push(new Particle(random(0,width),random(0,height)));
  }
}

function draw() {
  background('rgba(15,15,15,0.01)');
  // background('rgba(10,10,10,0.005)');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
  for(let i = 0;i<wideBars.length;i++) {
    wideBars[i].createWideBar();
    wideBars[i].goDown(wideBars);
  }
  if (r >= 200) {rSw = false;}
  if (r <= 10) {rSw = true;}
  if (g >= 200) {gSw = false;}
  if (g <= 10) {gSw = true;}
  if (b >= 200) {bSw = false;}
  if (b <= 10) {bSw = true;}

    if (rSw){r = r + colNum;
    } else {r = r - colNum;}
    if (gSw){g = g + colNum;
    } else {g = g - colNum;}
    if (bSw){b = b + colNum;
    } else {b = b - colNum;}
}

function keyPressed() {
var randomX = random(0,width);
var randomY = random(0,height);
  if (key >= 'a' && key <= 'e') {
    r = r + 10;
    for(var i=0;i<10;i++) {
      particles.push(new Particle(random(0,width),random(0,height)));
    }
  }
  if (key >= 'f' && key <= 'j') {
    g = g + 10;
    for(var i=0;i<10;i++) {
      particles.push(new Particle(randomX + random(-100,100), randomY + random(-100,100)));
    }
  }
  if (key >= 'k' && key <= 'o') {
    b = b + 10;
    for(var i=0;i<10;i++) {
      particles.push(new Particle(width/2 + random(-100,100), height/2 + random(-100,100)));
    }  }
  if (key >= 'p' && key <= 't') {
    r = 90;
    g = 80;
    b = 80;    
    for(var i=0;i<10;i++) {
      particles.push(new Particle(randomX + random(-100,100),randomY + random(-100,100)));
    }  }
  if (key >= 'u' && key <= 'z') {
    r = 190;
    g = 180;
    b = 180;
    for(var i=0;i<10;i++) {
      particles.push(new Particle(random(0,width),random(0,height)));
    }
  }
  if (key >= '0' && key <= '3') {
    wideBars.push(new WideBar(0,10,10,10));
  }

  if(particles.length > 80) {
    var extraParticles = particles.length + 1 - 80;
    particles.splice(0, extraParticles);
  }
}

function touchStarted() {
  var colorRandom = floor(random(0,4.9));
  if(colorRandom == 0) {
    r = r + 10;
  } else if(colorRandom == 1) {
    g = g + 10;
  } else if(colorRandom == 2) {
    b = b + 10;
  } else if(colorRandom == 3) {
    r = 90;
    g = 80;
    b = 80;  
  } else {
    r = 190;
    g = 180;
    b = 180;
  }
  for(var i=0;i<5;i++) {
    particles.push(new Particle(mouseX + random(-100,100), mouseY + random(-100,100)));
  }
  if(particles.length > 30) {
    var extraParticles = particles.length + 1 - 30;
    particles.splice(0, extraParticles);
  }
}