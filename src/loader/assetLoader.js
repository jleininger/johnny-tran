const manifest = [
    {src: "screens/title.jpg", id:"title"},
    {src: "screens/gameover.jpg", id:"gameover"},
    {src: "screens/playscreen.jpg", id:"playScreen"},
    {src: "screens/instructions.jpg", id:"instructions"},
    {src: "buttons.png", id:"buttons"},
    {src: "sprites.png", id:"mySprites"}
];

class Preloader {
    constructor() {
        this.queue = null;
    }
    
    loadFiles(callback) {
        this.queue = new createjs.LoadQueue(true, "assets/images/");
        this.queue.on("complete", callback, this);
        this.queue.loadManifest(manifest);
    }
}