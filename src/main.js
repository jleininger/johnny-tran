import Car from './car.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants/gameConstants.js';

const canvas = document.getElementById("game");
canvas.height = SCREEN_HEIGHT;
canvas.width = SCREEN_WIDTH;
const stage = new createjs.Stage(canvas);
 
const car = new Car(0, 0, 50, 100, '#ff0000');
car.registerKeyListners();
 
stage.addChild(car);
 
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", () => {
    car.move();
    stage.update();
});
