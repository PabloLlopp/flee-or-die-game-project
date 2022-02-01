class Flashlight {
    constructor(ctx){
        this.ctx = ctx;
        this.light = [];
        this.width = 10;
        this.height = 30;
        this.player = player;
        this.rotation = 0;
        this.moveX = 10;
        this.moveY = 10;
    }

    turnOnLight(){
        if (this.light.length < 3){
        this.light.push(
            {
            x: this.player.x - 3,
            y: this.player.y + 8,
            width: this.width,
            height: this.height
            }
        )}
        console.log(this.light)
        return true
    /*
        this.draw();
        console.log(this.light)
        console.log("PX: ", player.x)*/
    }

    draw(){
        this.ctx.save();
        this.ctx.translate(
            this.x, this.y
        )
        this.ctx.rotate(this.rotation)
        for (let i = 0; i < this.light.length; i++){
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(this.light[i].x, this.light[i].y, this.light[i].width, this.light[i].height)
        }
        this.ctx.restore();
    }

    lightRotation(){
        this.rotation = Math.atan2(-(this.x - mouse.x), -(mouse.y - this.y))
    }

    move(key){
        this.lightRotation();
        switch (key) {
            case 'w':
                if (this.y > 10)
                    this.y -= this.moveY
                    console.log(this.moveY)
                break;
            case 's':
                if (this.y + this.height < canvas.height) 
                    this.y += this.moveY
                break;
            case 'a':
                if (this.x > 10)
                    this.x -= this.moveX
                break;
             case 'd':
                if (this.x + this.width < canvas.width)
                    this.x = this.x + this.moveX
                break;
        }
        
    }

}