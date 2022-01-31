class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.height = 30;
        this.width = 30;
        this.moveX = 10;
        this.moveY = 10;
        
    }

    draw(){
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        
    }

    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }

}