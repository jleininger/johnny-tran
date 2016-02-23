import { FPS } from './constants/gameConstants.js';

class GameTimer {
    constructor() {
        this.frameCount = this.timer = 0;
    }
    
    update() {
        this.frameCount++;
        
        if(this.frameCount % (FPS) === 0 ) {
            this.timer = this.frameCount / FPS;
            return true;
        }
        return false;
    }
}

export default GameTimer;