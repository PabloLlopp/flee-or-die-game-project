class Enemies {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 400;
        this.y = 400;
        this.height = 10;
        this.width = 10;
        this.radius = 10;
        this.moveX = 1;
        this.moveY = 1;
    }

    move(frameNumber){
        if (frameNumber % 1 === 0){
            if (this.x > player.x){
                this.x -= 1 }
            
            if (this.x < player.x){
                this.x += 1 }

            if (this.y < player.y){
                this.y += 1}

            if (this.y > player.y){    
                this.y -= 1 }
        } console.log(this.x)
    }
    

    draw(){
        this.ctx.strokeStyle = 'black';
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        this.ctx.stroke()
    }
}