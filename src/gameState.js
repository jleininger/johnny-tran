import { GAME_OVER, PLAY, PAUSE, HOW_TO } from './constants/gameConstants.js';

const gameState = {
    playing: false,
    paused: false,
    inHowTo: false,
    gameOver: false,
    
    update: (state, action) => {
        switch(action.type) {
            case GAME_OVER:
                gameState.playing = false;
                gameState.gameOver = true;
            break;
            case PLAY:
                gameState.playing = true;
                gameState.gameOver = false;
            break;
            case PAUSE:
                gameState.paused = true;
                gameState.playing = false;
            break;
            case HOW_TO:
                gameState.playing = false;
                gameState.inHowTo = true;
            break;
        }    
    }
}

export default gameState;