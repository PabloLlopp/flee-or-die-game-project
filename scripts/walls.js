class Walls {
    constructor(ctx){
        this.ctx = ctx;
    
    }

    draw(){
        this.ctx.fillStyle = '#a3e4d7';
        this.ctx.fillRect(50, 50, 50, 50)
        this.ctx.fillRect(100, 50, 50, 50)
        this.ctx.fillRect(100, 50, 50, 50)
    }

}