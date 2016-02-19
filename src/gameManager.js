import AssetLoader from './loader/assetLoader.js';

const screenOrder = {
    title: 0,
    howTo: 1,
    play: 2,
    gameOver: 3
};

class GameManager {
    constructor() {
        this.assetLoader = new AssetLoader();    
        this.titleScreen = null;
        this.playScreen = null;
        this.gameOverScreen = null;
        this.howToScreen = null;  	      
    }
    
    initScreens() {
        this.assetLoader.loadFiles(() => {
            this.titleScreen = new createjs.Bitmap(this.assetLoader.queue.getResult("title"));
            this.playScreen = new createjs.Bitmap(this.queue.getResult("playScreen"));
            this.gameOverScreen = new createjs.Bitmap(this.queue.getResult("gameover"));
            this.howToScreen = new createjs.Bitmap(this.queue.getResult("instructions"));   
        });
    }
    
    goToTitleScreen() {
        
    }
    
    pauseGame() {
        
    }
    
    playGame() {
        
    }
    
    gameOver() {
        
    }
    
    showHowTo() {
        
    }
}

export default GameManager;