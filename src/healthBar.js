import { TOTAL_HEALTH } from './constants/gameConstants.js';

const healthBarColors = {
    background: "#000000",
    goodHealth: "#00ff00",
    dangerHealth: "#FF9100",
    dieing: "#ff0000"
}

class HealthBar extends createjs.Container {
    constructor(x, y, width, height) {
        super();
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.build();     
    }
    
    update(health) {
        const percent = health / TOTAL_HEALTH;
        let barColor = (health >= 80) ? healthBarColors.goodHealth :
            (health > 50) ? healthBarColors.dangerHealth : healthBarColors.dieing;
        
        this.healthBar.graphics
            .clear()
            .beginFill(barColor)
            .drawRect(this.x, this.y, this.width * percent, this.height);
    }
    
    build() {
       const healthBarBackground = new createjs.Shape()
       healthBarBackground.graphics.beginFill(healthBarColors.background)
                .drawRect(this.x, this.y, this.width, this.height);
       this.addChild(healthBarBackground);
       
       this.healthBar = new createjs.Shape()
       this.healthBar.graphics.beginFill(healthBarColors.goodHealth)
                .drawRect(this.x, this.y, this.width, this.height);
       this.addChild(this.healthBar); 
    }
}

export default createjs.promote(HealthBar, "Container");