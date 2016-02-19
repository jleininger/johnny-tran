// rAF
window.requestAnimationFrame = function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		function(f) {
			window.setTimeout(f,1e3/60);
		}
}();

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var W = canvas.width = 300;
var H = canvas.height = window.innerHeight;

var vx = 0;
var vy = 0;

var ax = 0;
var ay = 0;

// Friction Factor
var friction = 0.5;

// Car
var car = {
	x: 0,
	y: 0,
	w: 30,
	h: 50,
	
	draw: function() {
		ctx.fillStyle = 'blue';
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
};

// Initial Car Position
car.x = W/2 - car.w/2;
car.y = H - car.h - 30;


(function drawFrame() {
	window.requestAnimationFrame(drawFrame);
	ctx.clearRect(0, 0, W, H);
	
	vx += ax;
	vy += ay;
	
	// Know the speed first
	var speed = Math.sqrt(vx*vx + vy*vy);
	// Now decrease the speed
	if (speed > friction) {
		speed -= friction;
	} else {
		speed = 0;
	}
	
	// Now we have the new decreased speed!
	// So we need to calculate the new
	// vx and vy :D
	var angle = Math.atan2(vy, vx);
	vx = Math.cos(angle) * speed;
	vy = Math.sin(angle) * speed;
	
	//console.log(vx);
	
	car.x += vx;
	car.y += vy;
	car.draw();
}());


// Key Events
window.addEventListener('keydown', function(e) {
	
	switch(e.keyCode) {
		// Left
		case 37:
			ax = -1;
			break;
			
		// Right
		case 39:
			ax = 1;
			break;
			
		// Up
		case 38:
			ay = -1;
			break;
			
		// Down
		case 40:
			ay = 1;
			break;
	}
	
	e.preventDefault();
	e.stopPropagation();
	
}, false);

window.addEventListener('keyup', function() {
	ax = 0;
	ay = 0;
}, false);