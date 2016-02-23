class HealthBar extends createjs.Container {
    constructor(x, y, score = 0, color = '#000') {
        super();
        
        this.x = x;
        this.y = y;
        this.score = score;
        this.color = color;
        
        this.build();     
    }
    
    update(score) {
        this.score += score;
        this.txt.text = "Score: " + this.score;
    }
    
    clear() {
        this.score = 0;
        this.txt.text = "Score: " + this.score;
    }
    
    build() {
       this.txt = new createjs.Text("Score: " + this.score, "20px Arial", this.color);
       this.addChild(this.txt);
    }
}

export default createjs.promote(HealthBar, "Container");