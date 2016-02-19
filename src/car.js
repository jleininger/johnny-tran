import { FRICTION, SCREEN_WIDTH } from './constants/gameConstants.js';

class Car extends createjs.Container {
    constructor(x, y, width, height, color) {
        super();
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        
        this.ax = this.ay = this.vx = this.vy = 0;
        this.build();
    }
    
    move() {
        this.vx += this.ax;
	    this.vy += this.ay;
        
        let speed = Math.sqrt((this.vx * this.vx) + (this.vy * this.vy));
        
        if (speed > FRICTION) {
            speed -= FRICTION;
        } else {
            speed = 0;
        }
        
        let angle = Math.atan2(this.vy, this.vx);
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        this.x += this.vx;
	    this.y += this.vy;
        
        if(this.x >= SCREEN_WIDTH) {
            this.x = 0;
        } else if(this.x <= 0) {
            this.x = SCREEN_WIDTH;
        }
    }
    
    registerKeyListners() {
        window.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                // Left
                case 37:
                    this.ax = -1;
                    break;
                    
                // Right
                case 39:
                    this.ax = 1;
                    break;
                    
                // Up
                case 38:
                    this.ay = -1;
                    break;
                    
                // Down
                case 40:
                    this.ay = 1;
                    break;
            }
            
            e.preventDefault();
            e.stopPropagation();
        }, false);
        
        window.addEventListener('keyup', () => {
            this.ax = this.ay = 0;
        }, false);
    }
    
    build() {
        const car = new createjs.Shape();
        car.graphics.beginFill(this.color)
           .drawRect(this.x, this.y, this.width, this.height);
        this.addChild(car);
    }
}

export default createjs.promote(Car, "Container");