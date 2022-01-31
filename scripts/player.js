class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 100;
        this.y = 100;
        this.height = 30;
        this.width = 30;
        this.moveX = 10;
        this.moveY = 10;
        
    }

    draw(){
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}