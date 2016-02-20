const manifest = [
    {src: "screens/title.jpg", id:"title"},
    {src: "screens/gameover.jpg", id:"gameover"},
    {src: "screens/playscreen.jpg", id:"playScreen"},
    {src: "screens/instructions.jpg", id:"instructions"},
    {src: "street.png", id:"street"}
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

export default Preloader;