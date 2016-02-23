import TrafficCar from './trafficCar.js';
import { trafficCarSpawnPoints } from '../constants/gameConstants.js';

class TrafficSpawner {
    constructor(playerCar) {
        this.playerCar = playerCar;
    }
    
    spawnCar(stage) {
        const randomDir = (Math.round(Math.random() * 2) > 1) ? trafficCarSpawnPoints.up : trafficCarSpawnPoints.down;
        let randomPos = randomDir[Math.round(Math.random() * (randomDir.length - 1))];
        
        let speed = 12;
        if(randomDir === trafficCarSpawnPoints.up) {
            speed = 4;
        }
        
        const trafficCar = new TrafficCar(randomPos, speed, this.playerCar, stage, '#0000ff');
        trafficCar.x = randomPos;
        stage.addChild(trafficCar);
    }	                 
}

export default TrafficSpawner;