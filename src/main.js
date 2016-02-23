import Button from './button.js';
import Car from './car.js';
import TrafficSpawner from './traffic/trafficSpawner.js';
import HealthBar from './healthBar.js';
import ScoreKeeper from './ScoreKeeper.js';
import GameManager from './gameManager.js';
import GameTimer from './gameTimer.js';
import gameState from './gameState.js';
import { 
    SCREEN_HEIGHT, 
    SCREEN_WIDTH, 
    FPS, 
    GAME_OVER, 
    PLAY, 
    PAUSE, 
    HOW_TO 
} from './constants/gameConstants.js';

const canvas = document.getElementById("game");
canvas.height = SCREEN_HEIGHT;
canvas.width = SCREEN_WIDTH;
const stage = new createjs.Stage(canvas);
 
const gameManager = new GameManager();
gameManager.initGraphics(stage);
gameManager.initSounds();

const gameTimer = new GameTimer();
const healthBar = new HealthBar(300, 10, 150, 20);
const scoreKeeper = new ScoreKeeper(600, 45, 0, '#fff');
        
const car = new Car(0, 0, 80, 120, 100, healthBar, '#ff0000');
car.registerKeyListners();
car.x = SCREEN_WIDTH / 2; car.y = SCREEN_HEIGHT / 2;
car.addEventListener("gameOver", () => {
    toggleGame();    
});

const trafficSpawner = new TrafficSpawner(car);

const playBtn = new Button('Play');
playBtn.onClick(() => {
    gameState.update({}, { type: PLAY });
    toggleGame();
});

playBtn.x = SCREEN_WIDTH / 2; playBtn.y = SCREEN_HEIGHT / 2;

stage.addChild(playBtn);
stage.update();

const updater = () => {
    if(gameTimer.update()) {
        trafficSpawner.spawnCar(stage);
        scoreKeeper.update(1);
    }
    gameManager.scrollBackground();
    stage.update();
}

const toggleGame = () => {
    if(gameState.playing) {
        gameManager.startGame(stage);
        car.updateHealth(100);
        scoreKeeper.clear();
        stage.addChild(car, healthBar, scoreKeeper);
        
        createjs.Ticker.setFPS(FPS);
        createjs.Ticker.addEventListener("tick", updater);
    } else {
        createjs.Ticker.removeEventListener("tick", updater);
        gameManager.gameOver(stage, playBtn, scoreKeeper);
    }
}