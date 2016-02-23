import { SCREEN_HEIGHT } from '../constants/gameConstants.js';

class TrafficCar extends createjs.Container {
    constructor(x, speed, playerCar, stage, color) {
        super();
        
        this.x = x;
        this.speed = speed;
        this.playerCar = playerCar;
        this.mainStage = stage;
        this.color = color;
        this.alive = true;
        
        this.build();
    }
    
    move() {
        this.y += this.speed;
        
        if(this.y > SCREEN_HEIGHT) {
            this.mainStage.removeChild(this);
        } 
    }
    
    checkPlayerCollision() {
        const tCar = {
            x: this.x,
            y: this.y,
            width: 100,
            height: 140
        };
        
        const pCar = {
            x: this.playerCar.x,
            y: this.playerCar.y,
            width: 80,
            height: 120,    
        };
        
        if(this.alive && this.isCollide(tCar, pCar)) {
            this.alive = false;
            this.playerCar.updateHealth(this.playerCar.health - 20);
            createjs.Sound.play("crash");
        }
    }
    
    isCollide(rect1, rect2) {
        return !( rect1.x >= rect2.x + rect2.width || 
            rect1.x + rect1.width <= rect2.x || 
            rect1.y >= rect2.y + rect2.height || 
            rect1.y + rect1.height <= rect2.y );
    }
    
    build() {
        this.car = new createjs.Shape();
        this.car.graphics.beginFill(this.color)
           .drawRect(0, 0, 100, 140);
        this.addChild(this.car);
        
        createjs.Ticker.addEventListener("tick", () => {
            this.checkPlayerCollision();
            this.move();
        });
    }
}

export default createjs.promote(TrafficCar, "Container");