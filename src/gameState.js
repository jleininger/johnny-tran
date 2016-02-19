import { GAME_OVER, PLAY, PAUSE, HOW_TO } from './constants/gameConstants.js';

const gameState = {
    playing: false,
    paused: false,
    inHowTo: false,
    gameOver: false,
    
    update: (state, action) => {
        switch(action.type) {
            case GAME_OVER:
                this.playing = false;
                this.gameOver = true;
            break;
            case PLAY:
                this.playing = true;
                this.gameOver = false;
            break;
            case PAUSE:
                this.paused = true;
                this.playing = false;
            break;
            case HOW_TO:
                this.playing = false;
                this.inHowTo = true;
            break;
        }    
    }
}

export default gameState;