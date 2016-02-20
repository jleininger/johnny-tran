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
        this.graphicsLoaded = false;	      
    }
    
    initGraphics(stage) {
        this.assetLoader.loadFiles(() => {
            this.titleScreen = new createjs.Bitmap(this.assetLoader.queue.getResult("title"));
            this.playScreen = new createjs.Bitmap(this.assetLoader.queue.getResult("playScreen"));
            this.gameOverScreen = new createjs.Bitmap(this.assetLoader.queue.getResult("gameover"));
            this.howToScreen = new createjs.Bitmap(this.assetLoader.queue.getResult("instructions"));
            this.street = this.assetLoader.queue.getResult("street");
            
            stage.addChildAt(this.titleScreen, screenOrder.title);
            stage.addChildAt(this.howToScreen, screenOrder.howTo).visible = false;
            stage.addChildAt(this.playScreen, screenOrder.play).visible = false;
            stage.addChildAt(this.gameOverScreen, screenOrder.gameOver).visible = false;
            
            this.graphicsLoaded = true;
        });
    }
    
    startGame(stage) {
        this.roadMatrix = new createjs.Matrix2D();
        this.roadShape = new createjs.Shape();
        stage.addChild(this.roadShape); 
    }
    
    scrollBackground() {
        if(this.graphicsLoaded) {
            this.roadMatrix.translate(0, -2);
            this.roadShape.graphics
                .clear()
                .beginBitmapFill(this.street, "repeat", this.roadMatrix)
                .rect(0, 0, 800, 600);    
        }
    }
}

export default GameManager;