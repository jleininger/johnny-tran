class Button extends createjs.Container {
    constructor(text = '', color = '#222', radius = 50) {
        super();
        
        this.text = text;
        this.color = color;
        this.radius = radius;
        
        this.build();
    }
    
    build() {
        const circle = new createjs.Shape();
        circle.graphics.beginFill(this.color).drawCircle(0, 0, this.radius);
        this.addChild(circle);
    
        const txt = new createjs.Text(this.text, "20px Arial", 'white');
        this.addChild(txt);
        
        txt.x = txt.getMeasuredWidth()/2 * -1;
        txt.y = txt.getMeasuredHeight()/2 * -1;
    }
    
    onClick(handler) {
        this.addEventListener('click', handler);
    }
}

export default createjs.promote(Button, "Container");